const TransitRepository = require("../repository/sequelize/TransitRepository");
const VehicleRepository = require("../repository/sequelize/VehicleRepository");
const DriverRepository = require("../repository/sequelize/DriverRepository");


exports.showTransitsList = (req, res, next) => {
  TransitRepository.getTransits().then((transits) => {
    res.render("pages/transit/list", {
      transits: transits,
      navLocation: "transit",
    });
  });
};

exports.addTransit = (req, res, next) => {
  const transitData = { ...req.body };
  TransitRepository.createTransit(transitData).then((result) => {
    res.redirect("/transits");
  });
};

exports.updateTransit = (req, res, next) => {
  const transitId = req.body._id;
  const transitData = { ...req.body };
  TransitRepository.updateTransit(transitId, transitData).then((result) => {
    res.redirect("/transits");
  });
};

exports.deleteTransit = (req, res, next) => {
  const transitId = req.params.transitId;
  TransitRepository.deleteTransit(transitId).then(() => {
    res.redirect("/transits");
  });
};

exports.showAddTransitForm = (req, res, next) => {
  let allDrivers, allVehicles;
  DriverRepository.getDrivers()
    .then((drivers) => {
      allDrivers = drivers;
      return VehicleRepository.getVehicles();
    })
    .then((vehicles) => {
      allVehicles = vehicles;
      res.render("pages/transit/form", {
        transit: {},
        formMode: "createNew",
        allDrivers: allDrivers,
        allVehicles: allVehicles,
        pageTitle: "Nowe przejazdy",
        btnLabel: "Dodaj przejazd",
        formAction: "/transits/add",
        navLocation: "transit",
      });
    });
};

exports.showTransitDetails = (req, res, next) => {
  const transitId = req.params.transitId;
  TransitRepository.getTransitById(transitId).then((transit) => {
    res.render("pages/transit/form", {
      transit: transit,
      pageTitle: "Szczegóły przejazdu",
      allDrivers: [transit.driver],
      allVehicles: [transit.vehicle],
      formMode: "showDetails",
      formAction: "",
      navLocation: "transit",
    });
  });
};

exports.showEditTransitForm = (req, res, next) => {
  let allDrivers, allVehicles;
  const transitId = req.params.transitId;
  DriverRepository.getDrivers()
    .then((drivers) => {
      allDrivers = drivers;
      return VehicleRepository.getVehicles();
    })
    .then((vehicles) => {
      allVehicles = vehicles;
      return TransitRepository.getTransitById(transitId).then((transit) => {
        res.render("pages/transit/form", {
          transit: transit,
          pageTitle: "Edycja przejazdu",
          allDrivers: allDrivers,
          allVehicles: allVehicles,
          formMode: "edit",
          btnLabel: "Edytuj przejazd",
          formAction: "",
          navLocation: "transit",
        });
      });
    });
};
