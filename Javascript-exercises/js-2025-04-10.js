//Backend study (entry file)
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const compression = require("compression");
const morgan = require("morgan");

//Load environmental varaiables
dotenv.config({ path: "./.env" });

//Set security headers
app.use(helmet());

//Enable cross-origin request
app.use(cors());

//Implementing rate-limit
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many request, try again in 1hr",
});
app.use(limiter);

//Implementing body parser, reading data into req.body
app.use(express.json({ limit: "10kb" }));

//Data sanitization against noSql injection
app.use(mongoSanitize());

//Data sanitization against xss
app.use(xss());

//Preventing http parameter polution
app.use(hpp());

//Enable compression
app.use(compression());

//Integrating morgan
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
} else if (process.env.NODE_ENV === "production") {
  app.use(morgan("combined"));
}

//Main Routes

//Unresolved route
app.use("*", (req, res, next) => {
  next(new AppError("Can't find ${req.originalUrl} on this server.", 404));
});

//Error handler
app.use(globalErrorHandler);

//Start the server
app.listen(process.env.PORT, () => {
  console.log("App listening on ${process.env.PORT}");
});
