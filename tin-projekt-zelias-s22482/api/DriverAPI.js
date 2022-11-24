const DriverRepository = require("../repository/sequelize/DriverRepository");

exports.getDrivers = (req, res, next) => {
  DriverRepository.getDrivers()
    .then((drivers) => {
      res.status(200).json(drivers);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getDriverById = (req,res,next) => {
}