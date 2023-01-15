const VehicleRepository = require("../repository/sequelize/VehicleRepository");

exports.getVehicles = (req, res, next) => {
  VehicleRepository.getVehicles()
    .then((vehicles) => {
      res.status(200).json(vehicles);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getVehicleById = (req, res, next) => {
  const vehicleId = req.params.vehicleId;
  VehicleRepository.getVehicleById(vehicleId).then((vehicle) => {
    if (!vehicle) {
      res.status(404).json({
        message: "vehicle with id  ' + vehicleId + ' not found",
      });
    } else {
      res.status(200).json(vehicle);
    }
  });
};

exports.createVehicle = (req, res, next) => {
  VehicleRepository.createVehicle(req.body)
    .then((newObj) => {
      res.status(201).json(newObj);
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      res.status(500).json({
        validationErrors: err.errors,
      });
      next(err);
    });
};

exports.updateVehicle = (req, res, next) => {
  const vehicleId = req.params.vehicleId;
  VehicleRepository.updateVehicle(vehicleId, req.body)
    .then((result) => {
      res.status(200).json({ message: "vehicle updated !", vehicle: result });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      res.status(500).json({
        validationErrors: err.errors,
      });
      next(err);
    });
};

exports.deleteVehicle = (req, res, next) => {
  const vehicleId = req.params.vehicleId;
  VehicleRepository.deleteVehicle(vehicleId)
    .then((result) => {
      res.status(200).json({ message: "Removed vehicle", vehicle: result });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
