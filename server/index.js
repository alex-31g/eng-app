require("dotenv").config();
const PORT = process.env.PORT || 5000;
const express = require("express");
const sequelize = require("./db");
const models = require("./models/models");
const cors = require("cors");
const router = require("./routes/index");
const errorHandler = require("./middleware/error-handler.middleware");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/", router);
app.use(errorHandler);

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
