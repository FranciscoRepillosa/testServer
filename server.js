const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors())
app.use(express.json())

const userRoutes = require("./user/routes.confing");
const clientSideScriptsRoutes = require("./clientSideScripts/routes.confing");
const fakeServerRoutes = require("./fake/routes.confing");

app.use("/user", userRoutes);
app.use("/clientSideScript", clientSideScriptsRoutes);
app.use("/fakeServer", fakeServerRoutes);



app.use("*", (req, res, next) => {
  console.log("* route", req.originalUrl);
  next(new AppError(`I´m sorry but can´t find ${req.originalUrl} on this server`, 404));
});

//app.use(globalErrorHandler);

module.exports = app;