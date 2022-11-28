const VehicleRepository = require("../repository/sequelize/VehicleRepository");

exports.addVehicle = (req, res, next) => {
  const vehicleData = { ...req.body };
  VehicleRepository.createVehicle(vehicleData).then((result) => {
    res.redirect("/vehicles");
  });
};

exports.updateVehicle = (req, res, next) => {
  const vehicleId = req.body._id;
  const vehicleData = { ...req.body };
  VehicleRepository.updateVehicle(vehicleId, vehicleData).then((result) => {
    res.redirect("/vehicles");
  });
};

exports.deleteVehicle = (req, res, next) => {
  const vehicleId = req.params.vehicleId;
  VehicleRepository.deleteVehicle(vehicleId).then(() => {
    res.redirect("/vehicles");
  });
};

exports.showVehiclesList = (req, res, next) => {
  VehicleRepository.getVehicles().then((vehicles) => {
    res.render("pages/vehicle/list", {
      vehicles: vehicles,
      navLocation: "vehicle",
    });
  });
};

exports.showAddVehicleForm = (req, res, next) => {
  res.render("pages/vehicle/form", {
    vehicle: {},
    pageTitle: "Nowy pojazd",
    formMode: "createNew",
    btnLabel: "Dodaj pojazd",
    formAction: "/vehicles/add",
    navLocation: "vehicle",
  });
};

exports.showVehicleDetails = (req, res, next) => {
  const vehicleId = req.params.vehicleId;
  VehicleRepository.getVehicleById(vehicleId).then((vehicle) => {
    res.render("pages/vehicle/form", {
      vehicle: vehicle,
      pageTitle: "Szczegóły pojazdu",
      formMode: "showDetails",
      formAction: "",
      navLocation: "vehicle",
    });
  });
};

exports.showEditVehicleForm = (req, res, next) => {
  const vehicleId = req.params.vehicleId;
  VehicleRepository.getVehicleById(vehicleId).then((vehicle) => {
    res.render("pages/vehicle/form", {
      vehicle: vehicle,
      pageTitle: "Edycja pojazdu",
      formMode: "edit",
      btnLabel: "Edytuj pojazd",
      formAction: "/vehicles/edit",
      navLocation: "vehicle",
    });
  });
};
