const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(8080, (req, res) => {
  console.log("listning on port 8080.");
});
