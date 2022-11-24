const TransitRepository = require("../repository/sequelize/TransitRepository");

exports.getTransits = (req, res, next) => {
  TransitRepository.getTransits()
    .then((transits) => {
      res.status(200).json(transits);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getTransitById = (req, res, next) => {
  const transitId = req.params.transitId;
  TransitRepository.getTransitById(transitId).then((transit) => {
    if (!transit) {
      res.status(404).json({
        message: "transit with id  ' + transitId + ' not found",
      });
    } else {
      res.status(200).json(transit);
    }
  });
};

exports.createTransit = (req, res, next) => {
  TransitRepository.createTransit(req.body)
    .then((newObj) => {
      res.status(201).json(newObj);
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.updateTransit = (req, res, next) => {
  const transitId = req.params.transitId;
  TransitRepository.updateTransit(transitId, req.body)
    .then((result) => {
      res.status(200).json({ message: "transit updated !", transit: result });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.deleteTransit = (req, res, next) => {
  const transitId = req.params.transitId;
  TransitRepository.deleteTransit(transitId)
    .then((result) => {
      res.status(200).json({ message: "Removed transit", transit: result });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
