// dependencies
var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
var cheerio = require("cheerio");
var axios = require("axios");

// require all models
var db = require("./models");

var PORT = process.env.PORT || 4500;

// initionalize
var app = express();
// dataabse configuration
// using morgan looger for logging requests
app.use(logger("dev"))













import { Mongoose } from "mongoose";

// if deployed, use deployed database ,else local mongoHeadlines database
Var MONGODB_URI = Process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
// connect to MongoDB
Mongoose.connect(MONGODB_URI);