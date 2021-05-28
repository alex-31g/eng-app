require("dotenv").config();
const PORT = process.env.PORT || 5000;
const express = require("express");
const sequelize = require("./db");
const app = express();

app.get("/", (req, res) => {
  res.status(200).json("Server works");
});

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server started at ${PORT} port`));
  } catch (e) {
    console.log(e);
  }
};

start();
