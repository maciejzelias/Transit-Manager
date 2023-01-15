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
        pageTitle: "Nowy pojazd",
        formMode: "createNew",
        btnLabel: "Dodaj pojazd",
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
          pageTitle: "Edycja pojazdu",
          formMode: "edit",
          btnLabel: "Edytuj pojazd",
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
    pageTitle: "Nowy pojazd",
    formMode: "createNew",
    btnLabel: "Dodaj pojazd",
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
      pageTitle: "Szczegóły pojazdu",
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
      pageTitle: "Edycja pojazdu",
      formMode: "edit",
      btnLabel: "Edytuj pojazd",
      formAction: "/vehicles/edit",
      navLocation: "vehicle",
      validationErrors: [],
    });
  });
};
