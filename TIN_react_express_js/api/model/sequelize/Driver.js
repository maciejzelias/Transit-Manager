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
  lastName: {
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
  birthdayYear: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "nonEmpty",
      },
      len: {
        args: [4, 4],
        msg: "len_4",
      },
      isDecimal: {
        msg: "isDecimal",
      },
      max: {
        args: new Date().getFullYear(),
        msg: "date_between_1900_actual",
      },
      min: {
        args: 1900,
        msg: "date_between_1900_actual",
      },
    },
  },
  login: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: {
        msg: "nonEmpty",
      },
      len: {
        args: [2, 20],
        msg: "len_2_60",
      },
    },
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Driver;
