const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("social network", "root", "!64Ttvatt_dfn", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = { sequelize };
