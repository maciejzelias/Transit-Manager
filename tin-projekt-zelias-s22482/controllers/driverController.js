const DriverRepository = require("../repository/sequelize/DriverRepository");
const authUtil = require("../util/authUtils");

exports.showDriversList = (req, res, next) => {
  DriverRepository.getDrivers().then((drivers) => {
    res.render("pages/driver/list", {
      drivers: drivers,
      navLocation: "driver",
    });
  });
};

exports.addDriver = (req, res, next) => {
  const password = authUtil.hashPassword(req.body.password);
  const driverData = { ...req.body, password: password };
  DriverRepository.createDriver(driverData)
    .then((result) => {
      res.redirect("/drivers");
    })
    .catch((err) => {
      err.errors.forEach((error) => {
        if (error.path.includes("login") && error.type == "unique violation") {
          error.message = "ten login jest juz zajety !";
        }
      });
      res.render("pages/driver/form", {
        driver: driverData,
        pageTitle: "Dodawanie pracownika",
        formMode: "createNew",
        btnLabel: "Dodaj kierowce",
        formAction: "/drivers/add",
        navLocation: "driver",
        validationErrors: err.errors,
      });
    });
};

exports.deleteDriver = (req, res, next) => {
  const driverId = req.params.driverId;
  DriverRepository.deleteDriver(driverId).then(() => {
    res.redirect("/drivers");
  });
};

exports.updateDriver = (req, res, next) => {
  const driverId = req.body._id;
  const password = req.body.password;
  const driverData = { ...req.body, password: password };
  DriverRepository.updateDriver(driverId, driverData)
    .then((result) => {
      res.redirect("/drivers");
    })
    .catch((err) => {
      err.errors.forEach((error) => {
        if (error.path.includes("login") && error.type == "unique violation") {
          error.message = "ten login jest juz zajety !";
        }
      });
      DriverRepository.getDriverById(driverId).then((driver) => {
        res.render("pages/driver/form", {
          driver: { ...driverData, ...driver },
          pageTitle: "Edycja kierowcy",
          formMode: "edit",
          btnLabel: "Edytuj kierowce",
          formAction: "/drivers/edit",
          navLocation: "driver",
          validationErrors: err.errors,
        });
      });
    });
};

exports.showAddDriverForm = (req, res, next) => {
  res.render("pages/driver/form", {
    driver: {},
    pageTitle: "Nowy kierowca",
    formMode: "createNew",
    btnLabel: "Dodaj kierowce",
    formAction: "/drivers/add",
    navLocation: "driver",
    validationErrors: [],
  });
};

exports.showDriverDetails = (req, res, next) => {
  const driverId = req.params.driverId;
  DriverRepository.getDriverById(driverId).then((driver) => {
    res.render("pages/driver/form", {
      driver: driver,
      pageTitle: "Szczegóły kierowcy",
      formMode: "showDetails",
      formAction: "",
      navLocation: "driver",
      validationErrors: [],
    });
  });
};

exports.showEditDriverForm = (req, res, next) => {
  const driverId = req.params.driverId;
  DriverRepository.getDriverById(driverId).then((driver) => {
    res.render("pages/driver/form", {
      driver: driver,
      pageTitle: "Edycja kierowcy",
      formMode: "edit",
      btnLabel: "Edytuj kierowce",
      formAction: "/drivers/edit",
      validationErrors: [],
      navLocation: "driver",
    });
  });
};
