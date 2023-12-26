require("dotenv").config();

const express = require("express");

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/hasib", (req, res) => {
  res.send("hasibulhasanbd.com");
});
app.get("/login", (req, res) => {
  res.send("<h1>Please login at cha khao code koro..</h1>");
});
app.get("/demo", (req, res) => {
  res.send("<h2>Chai aur code</h2>");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
