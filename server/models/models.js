const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  idGoogle: {
    type: DataTypes.STRING,
    primaryKey: true,
    unique: true,
    allowNull: false,
  },
  name: { type: DataTypes.STRING, allowNull: false },
  photoUrl: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING, unique: true },
  regDate: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
  ip: { type: DataTypes.TEXT },
});

const Follower = sequelize.define("follower", {
  followerId: { type: DataTypes.STRING, allowNull: false },
});

User.hasMany(Follower);

module.exports = {
  User,
  Follower,
};
