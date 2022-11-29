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
    validate: {
      notEmpty: {
        msg: "Pole jest wymagane",
      },
    },
  },
  dateTo: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  startingLocalization: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Pole jest wymagane",
      },
      len: {
        args: [2, 60],
        msg: "Pole powinno zawierać od 2 do 60 znaków",
      },
    },
  },
  endingLocalization: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Pole jest wymagane",
      },
      len: {
        args: [2, 60],
        msg: "Pole powinno zawierać od 2 do 60 znaków",
      },
    },
  },
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
