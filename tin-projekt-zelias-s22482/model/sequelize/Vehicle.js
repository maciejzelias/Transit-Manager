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
        msg: "Pole jest wymagane",
      },
      len: {
        args: [2, 60],
        msg: "Pole powinno zawierać od 2 do 60 znaków",
      },
    },
  },
  productionYear: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Pole jest wymagane",
      },
      len: {
        args: [4, 4],
        msg: "Pole powinno zawierać 4 znaki",
      },
    },
  },
  semitrailerSize: {
    type: Sequelize.INTEGER,
    allowNull: true,
    validate: {
      len: {
        args: [1, 1],
        msg: "Pole powinno zawierać 1 znak",
      },
    },
  },
});

module.exports = Vehicle;
