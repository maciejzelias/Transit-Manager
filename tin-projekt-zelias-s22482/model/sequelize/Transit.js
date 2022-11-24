const Sequelize = require("sequelize");
const sequelize = require("../../config/sequelize/sequelize");

const Transit = sequelize.define("Transit", {
  _id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  dateFrom: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  dateTo: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  startingLocalization: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  endingLocalization: { type: Sequelize.STRING, allowNull: false },
  driverId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  vehicleId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Transit;
