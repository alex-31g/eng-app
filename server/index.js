require("dotenv").config();
const PORT = process.env.PORT || 5000;
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).json("Server works");
});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Server started at ${PORT} port`);
});
