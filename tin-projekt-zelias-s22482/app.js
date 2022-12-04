var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const authUtils = require("./util/authUtils");

var indexRouter = require("./routes/index");
var driverRouter = require("./routes/driverRoute");
var transitRouter = require("./routes/transitRoute");
var vehicleRouter = require("./routes/vehicleRoute");
const driverApiRouter = require("./routes/api/DriverApiRoute");
const transitApiRouter = require("./routes/api/TransitApiRoute");
const vehicleApiRouter = require("./routes/api/VehicleApiRoute");

var app = express();

const sequelizeInit = require("./config/sequelize/init");
sequelizeInit().catch((err) => {
  console.log(err);
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//adding sessions
const session = require("express-session");
app.use(
  session({
    secret: "my_secret_password",
    resave: false,
  })
);

app.use((req, res, next) => {
  const loggedUser = req.session.loggedUser;
  res.locals.loggedUser = loggedUser;
  if (!res.locals.loginError) {
    res.locals.loginError = undefined;
  }
  next();
});

app.use("/", indexRouter);
app.use("/drivers", authUtils.permitAuthenticatedUser, driverRouter);
app.use("/transits", authUtils.permitAuthenticatedUser, transitRouter);
app.use("/vehicles", authUtils.permitAuthenticatedUser, vehicleRouter);
// app.use("/api/drivers", driverApiRouter);
// app.use("/api/transits", transitApiRouter);
// app.use("/api/vehicles", vehicleApiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
