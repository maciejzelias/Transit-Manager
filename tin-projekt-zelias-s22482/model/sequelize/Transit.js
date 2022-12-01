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
      isDate: {
        msg: "pole nie jest datą !",
      },
    },
  },
  dateTo: {
    type: Sequelize.DATE,
    allowNull: true,
    validate: {
      isDate: {
        msg: "pole nie jest datą !",
      },
      // isAfter: {
      //   args:  ,
      //   msg: "Data powinna byc pozniejsza niz data od !"
      // }
    },
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
    validate: {
      notEmpty: {
        msg: "Pole jest wymagane",
      },
    },
  },
  vehicleId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Pole jest wymagane",
      },
    },
  },
});

module.exports = Transit;
