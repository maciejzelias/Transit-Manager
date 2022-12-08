const Sequelize = require("sequelize");

const Driver = require("../../model/sequelize/Driver");
const Transit = require("../../model/sequelize/Transit");
const Vehicle = require("../../model/sequelize/Vehicle");

exports.getTransits = () => {
  return Transit.findAll({
    include: [
      {
        model: Driver,
        as: "driver",
      },
      {
        model: Vehicle,
        as: "vehicle",
      },
    ],
  });
};

exports.getTransitById = (transitId) => {
  return Transit.findByPk(transitId, {
    include: [
      { model: Driver, as: "driver" },
      { model: Vehicle, as: "vehicle" },
    ],
  });
};

exports.createTransit = (data) => {
  return Transit.create({
    dateFrom: data.dateFrom === "" ? null : data.dateFrom,
    dateTo: data.dateTo === "" ? null: data.dateTo,
    startingLocalization: data.startingLocalization,
    endingLocalization: data.endingLocalization ,
    driverId: data.driverId,
    vehicleId: data.vehicleId,
  });
};

exports.updateTransit = (transitId, data) => {
  return Transit.update({
    dateFrom: data.dateFrom === "" ? null : data.dateFrom,
    dateTo: data.dateTo === "" ? null: data.dateTo,
    startingLocalization: data.startingLocalization,
    endingLocalization: data.endingLocalization ,
    driverId: data.driverId,
    vehicleId: data.vehicleId,
  }, { where: { _id: transitId } });
};

exports.deleteTransit = (transitId) => {
  return Transit.destroy({
    where: { _id: transitId },
  });
};

exports.deleteManyTransits = (transitIds) => {
  return Transit.find({ _id: { [Sequelize.Op.in]: transitIds } });
};
