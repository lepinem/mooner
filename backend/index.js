// index.js

// modules
const express = require("express")
const session = require('express-session')

const mustacheExpress = require("mustache-express")

const bodyParser = require("body-parser")
const mongoose = require('mongoose')
const moment = require('moment')

const app = express()
const {getCurrentLocation,
  getCurrentPress,
  calPressChange,
  calTempChange,
  calExtremeConditions,
  calMaxWind,
  calHuntWindSpeed,
  calHuntDay,
  calMoonPhase} = require('./dal')

// view engine and midware
app.engine("mustache", mustacheExpress())
app.set("view engine", "mustache")
app.set("views", __dirname + "/views")

app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.listen(3000, function () {
  console.log("Let's go hunting");
});
