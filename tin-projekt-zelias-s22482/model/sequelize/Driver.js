const Sequelize = require("sequelize");
const sequelize = require("../../config/sequelize/sequelize");

const Driver = sequelize.define("Driver", {
  _id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  birthdayYear: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Driver;
