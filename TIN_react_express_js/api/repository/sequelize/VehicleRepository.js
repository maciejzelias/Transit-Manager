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
    registrationPlate: newVehicleData.registrationPlate,
    semitrailerSize:
      newVehicleData.semitrailerSize === ""
        ? null
        : newVehicleData.semitrailerSize,
  });
};

exports.updateVehicle = (vehicleId, vehicleData) => {
  return Vehicle.update(
    {
      brandName: vehicleData.brandName,
      productionYear: vehicleData.productionYear,
      registrationPlate: vehicleData.registrationPlate,
      semitrailerSize:
        vehicleData.semitrailerSize === "" ? null : vehicleData.semitrailerSize,
    },
    { where: { _id: vehicleId } }
  );
};

exports.deleteVehicle = (vehicleId) => {
  return Vehicle.destroy({
    where: { _id: vehicleId },
  });
};
