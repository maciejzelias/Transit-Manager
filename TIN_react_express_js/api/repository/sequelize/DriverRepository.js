const Driver = require("../../model/sequelize/Driver");
const Transit = require("../../model/sequelize/Transit");
const Vehicle = require("../../model/sequelize/Vehicle");

exports.getDrivers = () => {
  return Driver.findAll();
};

exports.getDriverById = (driverId) => {
  return Driver.findByPk(driverId, {
    include: [
      {
        model: Transit,
        as: "transits",
        include: [
          {
            model: Vehicle,
            as: "vehicle",
          },
        ],
      },
    ],
  });
};

exports.createDriver = (newDriverData) => {
  return Driver.create({
    firstName: newDriverData.firstName,
    lastName: newDriverData.lastName,
    birthdayYear: newDriverData.birthdayYear,
  });
};

exports.findByLogin = (login) => {
  return Driver.findOne({
    where: { login: login },
  });
};

exports.updateDriver = (driverId, driverData) => {
  const firstName = driverData.firstName;
  const lastName = driverData.lastName;
  const birthdayYear = driverData.birthdayYear;

  return Driver.update(driverData, { where: { _id: driverId } });
};

exports.deleteDriver = (driverId) => {
  return Driver.destroy({
    where: { _id: driverId },
  });
};
