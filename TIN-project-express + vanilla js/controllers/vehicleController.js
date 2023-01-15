const VehicleRepository = require("../repository/sequelize/VehicleRepository");

exports.addVehicle = (req, res, next) => {
  const vehicleData = { ...req.body };
  VehicleRepository.createVehicle(vehicleData)
    .then((result) => {
      res.redirect("/vehicles");
    })
    .catch((err) => {
      err.errors.forEach((error) => {
        if (
          error.path.includes("registrationPlate") &&
          error.type == "unique violation"
        ) {
          error.message = "ta rejestracja jest juz zajeta !";
        }
      });
      res.render("pages/vehicle/form", {
        vehicle: vehicleData,
        pageTitle: req.__("vehicle.form.add.pageTitle"),
        formMode: "createNew",
        btnLabel: req.__("vehicle.form.add.btnLabel"),
        formAction: "/vehicles/add",
        navLocation: "vehicle",
        validationErrors: err.errors,
      });
    });
};

exports.updateVehicle = (req, res, next) => {
  const vehicleId = req.body._id;
  const vehicleData = { ...req.body };
  VehicleRepository.updateVehicle(vehicleId, vehicleData)
    .then((result) => {
      res.redirect("/vehicles");
    })
    .catch((err) => {
      err.errors.forEach((error) => {
        if (
          error.path.includes("registrationPlate") &&
          error.type == "unique violation"
        ) {
          error.message = "ta rejestracja jest juz zajeta !";
        }
      });
      VehicleRepository.getVehicleById(vehicleId).then((vehicle) => {
        res.render("pages/vehicle/form", {
          vehicle: { ...vehicleData, ...vehicle },
          pageTitle: req.__("vehicle.form.edit.pageTitle"),
          formMode: "edit",
          btnLabel: req.__("vehicle.form.edit.btnLabel"),
          formAction: "/vehicles/edit",
          navLocation: "vehicle",
          validationErrors: err.errors,
        });
      });
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
    pageTitle: req.__("vehicle.form.add.pageTitle"),
    formMode: "createNew",
    btnLabel: req.__("vehicle.form.add.btnLabel"),
    formAction: "/vehicles/add",
    navLocation: "vehicle",
    validationErrors: [],
  });
};

exports.showVehicleDetails = (req, res, next) => {
  const vehicleId = req.params.vehicleId;
  VehicleRepository.getVehicleById(vehicleId).then((vehicle) => {
    res.render("pages/vehicle/form", {
      vehicle: vehicle,
      pageTitle: req.__("vehicle.form.details.pageTitle"),
      formMode: "showDetails",
      formAction: "",
      navLocation: "vehicle",
      validationErrors: [],
    });
  });
};

exports.showEditVehicleForm = (req, res, next) => {
  const vehicleId = req.params.vehicleId;
  VehicleRepository.getVehicleById(vehicleId).then((vehicle) => {
    res.render("pages/vehicle/form", {
      vehicle: vehicle,
      pageTitle: req.__("vehicle.form.edit.pageTitle"),
      formMode: "edit",
      btnLabel: req.__("vehicle.form.edit.btnLabel"),
      formAction: "/vehicles/edit",
      navLocation: "vehicle",
      validationErrors: [],
    });
  });
};
