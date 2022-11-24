const Sequelize = require("sequelize");
const sequelize = require("../../config/sequelize/sequelize");

const Vehicle = sequelize.define("Vehicle", {
  _id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  brandName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  productionYear: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  semitrailerSize: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
});

module.exports = Vehicle;
