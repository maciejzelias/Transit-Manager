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
  productionYear: {
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
  semitrailerSize: {
    type: Sequelize.INTEGER,
    allowNull: true,
    validate: {
      len: {
        args: [1, 1],
        msg: "len_1",
      },
      max: {
        args: 5,
        msg: "between_1_5",
      },
      min: {
        args: -1,
        msg: "between_1_5",
      },
    },
  },
});

module.exports = Vehicle;
