const Driver = require("../../model/sequelize/Driver");
const Transit = require("../../model/sequelize/Transit");
const Vehicle = require("../../model/sequelize/Vehicle");

exports.getVehicles = () => {
  return Vehicle.findAll();
};

exports.getVehicleById = (vehicleId) => {
  return Vehicle.findByPk(vehicleId, {
    include: [
      {
        model: Transit,
        as: "transits",
        include: [
          {
            model: Driver,
            as: "driver",
          },
        ],
      },
    ],
  });
};

exports.createVehicle = (newVehicleData) => {
  return Vehicle.create({
    brandName: newVehicleData.brandName,
    productionYear: newVehicleData.productionYear,
    semitrailerSize: newVehicleData.semitrailerSize,
  });
};

exports.updateVehicle = (vehicleId, vehicleData) => {
  return Vehicle.update(vehicleData, { where: { _id: vehicleId } });
};

exports.deleteVehicle = (vehicleId) => {
  return Vehicle.destroy({
    where: { _id: vehicleId },
  });
};
