// index.js

const express = require("express");
const mustacheExpress = require("mustache-express");
const {getPressChange, getTempChange, getExtremeConditions, getMaxWind, getHuntWindSpeed, getHuntDay, getMoonPhase} = require("./dal");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const app = express();


app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", __dirname + "/views");

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, function () {
  console.log("Let's go hunting");
});
