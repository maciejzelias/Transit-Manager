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
        msg: "nonEmpty",
      },
      isDate: {
        msg: "notDate",
      },
    },
  },
  dateTo: {
    type: Sequelize.DATE,
    allowNull: true,
    validate: {
      isDate: {
        msg: "notDate",
      },
    },
  },
  startingLocalization: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "nonEmpty",
      },
      len: {
        args: [2, 60],
        msg: "len_2_60",
      },
    },
  },
  endingLocalization: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "nonEmpty",
      },
      len: {
        args: [2, 60],
        msg: "len_2_60",
      },
    },
  },
  driverId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "nonEmpty",
      },
    },
  },
  vehicleId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "nonEmpty",
      },
    },
  },
});

module.exports = Transit;
