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
      isDecimal: {
        msg: "Pole powinno być liczbą",
      },
      max: {
        args: new Date().getFullYear(),
        msg:
          "Pole powinno byc w przedziale 1950 - " +
          `${new Date().getFullYear()}`,
      },
      min: {
        args: 1950,
        msg:
          "Pole powinno byc w przedziale 1950 - " +
          +`${new Date().getFullYear()}`,
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
      max: {
        args: 5,
        msg: "Pole powinno być w przediale 0-5",
      },
      min: {
        args: -1,
        msg: "Pole powinno być w przedziale 0-5",
      },
    },
  },
  registrationPlate: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: {
        msg: "Pole jest wymagane",
      },
      len: {
        args: [2, 10],
        msg: "Pole powinno zawierać od 2 do 10 znaków",
      },
    },
  },
});

module.exports = Vehicle;
