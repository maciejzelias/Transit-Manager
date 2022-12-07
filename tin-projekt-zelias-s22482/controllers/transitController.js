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
  TransitRepository.createTransit(transitData)
    .then((result) => {
      res.redirect("/transits");
    })
    .catch((err) => {
      let allDrivers, allVehicles;
      DriverRepository.getDrivers()
        .then((drivers) => {
          allDrivers = drivers;
          return VehicleRepository.getVehicles();
        })
        .then((vehicles) => {
          allVehicles = vehicles;
          res.render("pages/transit/form", {
            transit: transitData,
            formMode: "createNew",
            pageTitle: req.__("transit.form.add.pageTitle"),
            btnLabel: req.__("transit.form.add.btnLabel"),
            allDrivers: allDrivers,
            allVehicles: allVehicles,
            formAction: "/transits/add",
            navLocation: "transit",
            validationErrors: err.errors,
          });
        });
    });
};

exports.updateTransit = (req, res, next) => {
  const transitData = { ...req.body };
  const transitId = req.body._id;
  TransitRepository.updateTransit(transitId, transitData)
    .then((result) => {
      res.redirect("/transits");
    })
    .catch((err) => {
      let allDrivers, allVehicles;
      DriverRepository.getDrivers()
        .then((drivers) => {
          allDrivers = drivers;
          return VehicleRepository.getVehicles();
        })
        .then((vehicles) => {
          allVehicles = vehicles;
          TransitRepository.getTransitById(transitId).then((transit) => {
            res.render("pages/transit/form", {
              transit: Object.assign(transit, transitData),
              pageTitle: req.__("transit.form.edit.pageTitle"),
              formMode: "edit",
              btnLabel: req.__("transit.form.edit.btnLabel"),
              allDrivers: allDrivers,
              allVehicles: allVehicles,
              formAction: "/transits/edit",
              navLocation: "transit",
              validationErrors: err.errors,
            });
          });
        });
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
        pageTitle: req.__("transit.form.add.pageTitle"),
        btnLabel: req.__("transit.form.add.btnLabel"),
        formAction: "/transits/add",
        navLocation: "transit",
        validationErrors: [],
      });
    });
};

exports.showTransitDetails = (req, res, next) => {
  const transitId = req.params.transitId;
  TransitRepository.getTransitById(transitId).then((transit) => {
    res.render("pages/transit/form", {
      transit: transit,
      pageTitle: req.__("transit.form.details.pageTitle"),
      allDrivers: [transit.driver],
      allVehicles: [transit.vehicle],
      formMode: "showDetails",
      formAction: "",
      navLocation: "transit",
      validationErrors: [],
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
          pageTitle: req.__("transit.form.edit.pageTitle"),
          allDrivers: allDrivers,
          allVehicles: allVehicles,
          formMode: "edit",
          btnLabel: req.__("transit.form.edit.btnLabel"),
          formAction: "/transits/edit",
          navLocation: "transit",
          validationErrors: [],
        });
      });
    });
};
