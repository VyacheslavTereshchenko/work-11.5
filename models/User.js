const path = require("path");
const { sequelize } = require("../DB");
const { DataTypes } = require("sequelize");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      // allowNull defaults to true
    },
    ptoto_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gender: {
      type: DataTypes.ENUM("male", "female"),
      allowNull: true,
    },
    balance: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
    },
  },

  {
    tableName: "users",
    timestamps: false,
  }
);
module.exports = { User };
