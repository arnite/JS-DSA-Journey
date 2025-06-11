// Today we continue from where we stopped yesterday on our backend study
// Creating middlewares (restricTo and protect) for Routes
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/AppError");
const User = require("../models/userModel");

// let's assume this part is also the model
userSchema.methods.ischangedPasswordAfter = (JWT) => {
  if (this.passwordChangedAt) {
    const convertedPCAT = Math.round(this.passwordChangedAt.getTime() / 1000);
    return JWT < convertedPCAT;
  }
  return false;
};

const restricTo = (...roles) => {
  return (res, req, next) => {
    if (!roles.includes(req.user.roles)) {
      return next(new AppError("Forbidden request", 403));
    }

    next();
  };
};

const protect = catchAsync(async (req, res, next) => {
  let token = "";

  // Extracting token
  if (req.authorization && req.authorization.header.startsWith("Bearer")) {
    token = req.authorization.header.split(" ")[1];
  }

  if (!token) return next(new AppError("Please login", 404));

  //Verifying token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // Check if user still exist
  const freshUser = await User.findById(decoded.id);

  if (!freshUser) return next(new AppError("User no longer exist", 404));

  //Confirm that the user has not changed their password after the token was issued.
  if (freshUser.ischangedPasswordAfter(decoded.iat))
    return next(
      new AppError("User has changed password, please login again", 404)
    );

  //Grant access to protected route.
  freshUser = req.user;
  next();
});
