const VehicleRepository = require("../repository/sequelize/VehicleRepository");

exports.showVehiclesList = (req, res, next) => {
  VehicleRepository.getVehicles().then((vehicles) => {
    res.render("pages/vehicle/list", {
      vehicles: vehicles,
      navLocation: "vehicle",
    });
  });
};

exports.showAddVehicleForm = (req, res, next) => {
  res.render("pages/vehicle/form", { navLocation: "vehicle" });
};

exports.showVehicleDetails = (req, res, next) => {
  res.render("pages/vehicle/details", { navLocation: "vehicle" });
};

exports.showEditVehicleForm = (req, res, next) => {
  res.render("pages/vehicle/form-edit", { navLocation: "vehicle" });
};
