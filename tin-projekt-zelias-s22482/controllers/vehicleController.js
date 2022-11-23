exports.showVehiclesList = (req, res, next) => {
  res.render("pages/vehicle/list", { navLocation: "vehicle" });
};

exports.showAddVehicleForm = (req, res, next) => {
  res.render("pages/vehicle/form", { navLocation: "vehicle" });
};

exports.showVehicleDetails = (req, res, next) => {
  res.render("pages/vehicle/details", { navLocation: "vehicle" });
};

exports.showEditVehicleForm = (req, res, next) => {
  res.render("pages/vehicle/form-edit", { navLocation: "vehicle" });
};
