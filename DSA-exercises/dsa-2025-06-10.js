// Today we are studying AUTHENTICATION AND STUFFS...
//creating the user Model.
const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jwt");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    validate: [validator.isEmail, "Please input a valid email"],
  },
  role: {
    type: String,
    enum: ["user", "admin", "superAdmin"],
    default: "user",
    trim: true,
  },
  password: {
    type: String,
    required: true,
    select: true,
    min: [9, "password must be a minimum of 9 characters"],
    trim: true,
  },
  passwordConfirm: {
    type: String,
    required: true,
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords don't match",
    },
  },
});

userSchema.pre("save", async (next) => {
  if (!isModified(this.password)) return next();

  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;

  next();
});

userSchema.methods.correctPassword = function (
  candidatePassword,
  userPassword
) {
  return bcrypt.compare(candidatePassword, userPassword);
};

module.exports = mongoose.model("User", userModel);

//Creating signup and login logic
const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, process.env.JWT_EXPIRES);
};

const createSendToken = (res, user, status) => {
  const token = signToken(user.id);

  user.password = undefined;

  res.status(status).json({
    status: "success",
    message: "succesfully signed to ARNOLD PROJECT",
    data: user,
  });
};

exports.signUp = catchAsync(async (res, req, next) => {
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });

  createSendToken(res, user, 201);
});
exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError("Invalid email or password", 404));
  }

  const user = await User.findOne({ email }).select("password");

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError("No user exist with that ID", 404));
  }

  createSendToken(res, user, 201);
});
