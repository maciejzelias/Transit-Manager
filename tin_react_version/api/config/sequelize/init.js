const sequelize = require("./sequelize");

const Driver = require("../../model/sequelize/Driver");
const Transit = require("../../model/sequelize/Transit");
const Vehicle = require("../../model/sequelize/Vehicle");

module.exports = () => {
  Driver.hasMany(Transit, {
    as: "transits",
    foreignKey: { name: "driverId", allowNull: false },
    constraints: true,
    onDelete: "CASCADE",
  });

  Transit.belongsTo(Driver, {
    as: "driver",
    foreignKey: { name: "driverId", allowNull: false },
  });

  Vehicle.hasMany(Transit, {
    as: "transits",
    foreignKey: { name: "vehicleId", allowNull: false },
    constraints: true,
    onDelete: "CASCADE",
  });

  Transit.belongsTo(Vehicle, {
    as: "vehicle",
    foreignKey: { name: "vehicleId", allowNull: false },
  });

  let allDrivers, allVehicles;

  return sequelize
    .sync({ force: true })
    .then(() => {
      return Driver.findAll();
    })
    .then((drivers) => {
      if (!drivers || drivers.length == 0) {
        return Driver.bulkCreate([
          { firstName: "Michal", lastName: "Jarosz", birthdayYear: 1996 },
          { firstName: "Jakub", lastName: "Mazur", birthdayYear: 2002 },
          { firstName: "Jan", lastName: "Kowalski", birthdayYear: 1986 },
        ]).then(() => {
          return Driver.findAll();
        });
      } else {
        return drivers;
      }
    })
    .then((drivers) => {
      allDrivers = drivers;
      return Vehicle.findAll();
    })
    .then((vehicles) => {
      if (!vehicles || vehicles.length == 0) {
        return Vehicle.bulkCreate([
          {
            brandName: "Scania",
            productionYear: 2004,
            semitrailerSize: 5,
            registrationPlate: "WU 1243",
          },
          {
            brandName: "Scania",
            productionYear: 2000,
            semitrailerSize: 4,
            registrationPlate: "WE 1052S",
          },
          {
            brandName: "Mercedes",
            productionYear: 1998,
            registrationPlate: "TSA 88SA",
          },
        ]).then(() => {
          return Driver.findAll();
        });
      } else {
        return vehicles;
      }
    })
    .then((vehicles) => {
      allVehicles = vehicles;
      return Transit.findAll();
    })
    .then((transits) => {
      if (!transits || transits.length == 0) {
        return Transit.bulkCreate([
          {
            driverId: allDrivers[0]._id,
            vehicleId: allVehicles[0]._id,
            dateFrom: "2022-05-11",
            dateTo: "2022-05-14",
            startingLocalization: "Warsaw",
            endingLocalization: "Barcelona",
          },
          {
            driverId: allDrivers[1]._id,
            vehicleId: allVehicles[0]._id,
            dateFrom: "2022-10-20",
            dateTo: null,
            startingLocalization: "Warsaw",
            endingLocalization: "Konstancin",
          },
          {
            driverId: allDrivers[0]._id,
            vehicleId: allVehicles[1]._id,
            dateFrom: "2022-12-15",
            dateTo: null,
            startingLocalization: "Warsaw",
            endingLocalization: "London",
          },
        ]);
      } else {
        return transits;
      }
    });
};
