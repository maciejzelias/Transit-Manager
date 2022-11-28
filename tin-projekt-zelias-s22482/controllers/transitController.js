const TransitRepository = require("../repository/sequelize/TransitRepository");
const VehicleRepository = require("../repository/sequelize/VehicleRepository");

exports.showTransitsList = (req, res, next) => {
  TransitRepository.getTransits().then((transits) => {
    res.render("pages/transit/list", {
      transits: transits,
      navLocation: "transit",
    });
  });
};

exports.showAddTransitForm = (req, res, next) => {
  let allDrivers, allVehicles;
  TransitRepository.getTransits()
    .then((drivers) => {
      allDrivers = drivers;
      return VehicleRepository.getVehicles;
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
      formMode: "showDetails",
      formAction: "",
      navLocation: "transit",
    });
  });
};

exports.showEditTransitForm = (req, res, next) => {
  const transitId = req.params.transitId;
  TransitRepository.getTransitById(transitId).then((transit) => {
    res.render("pages/transit/form", {
      transit: transit,
      pageTitle: "Edycja przejazdu",
      formMode: "showDetails",
      formAction: "",
      navLocation: "transit",
    });
  });
};
