// This is my study for learning how to setup an entry file e.g "app.js", i intend to learn about "error handling" tomorrow thou
const dotenv = require("dotenv");
const express = require("express");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss - clean");
const hpp = require("hpp");
const compression = require("compression");
const morgan = require("morgan");
const userRoute = require("userRoute");
const globalErrorhandler = require("./controllers/errorController");
const AppError = require("./utils/AppError");

// Configuring environmental variable
dotenv.config({ path: "./.env" });

//Setting up security middleware
app.use(helmet());

//Enabling CORS (Cross-origin-request)
app.use(cors());

// Enabling rate-limting
app.use(
  rateLimit({
    max: 100,
    windowMs: 120 * 60 * 1000,
    message: "Too many request, please try again later",
  })
);

// Enabling body parser
app.use(express.json({ limit: "10kb" }));

// Data sanitiazation
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

// Enabling compression
app.use(compression());

// Enabling morgan
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
} else if (process.env.NODE_ENV === "production") {
  app.use(morgan("combined"));
}

//  Test route
app.get("/", (res) => {
  res.send("Backend application is running...");
});

// Main route
app.use("/app/users", userRoute);

// Accounting for invalid or non-existing route
app.all("*", (next) => {
  next(new AppError("invalid route", 404));
});

// Error handling
app.use(globalErrorhandler);

// Starting the server
app.listen(process.env.NODE_ENV, () => {
  console.log(`App running on ${process.env.NODE_ENV}..`);
});

// Honestly i did'nt believing i will be able to pull this off, this is my first time fully writting an entry file from begining to the end without any help whatsoever, i think i have reinforced my backend knowledge to an extent.
