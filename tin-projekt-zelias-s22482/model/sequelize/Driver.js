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
        msg: "Pole jest wymagane",
      },
      len: {
        args: [2, 60],
        msg: "Pole powinno zawierać od 2 do 60 znaków",
      },
    },
  },
  lastName: {
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
  birthdayYear: {
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
});

module.exports = Driver;
