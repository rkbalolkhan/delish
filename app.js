const mongoose = require("mongoose");
const ejs = require("ejs");
const methodOverload = require("method-overload");
const express = require("express");
const path = require("path");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.post("/download", (req, res) => {
  let { videoLink } = req.body;
  console.log(videoLink);
  res.render("downloader.ejs", { videoLink });
});

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(8080, () => {
  console.log("Listing on port 8080");
});
