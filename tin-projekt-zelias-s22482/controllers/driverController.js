exports.showDriversList = (req, res, next) => {
  res.render("pages/driver/list", { navLocation: "driver" });
};

exports.showAddDriverForm = (req, res, next) => {
  res.render("pages/driver/form", { navLocation: "driver" });
};

exports.showDriverDetails = (req, res, next) => {
  res.render("pages/driver/details", { navLocation: "driver" });
};

exports.showEditDriverForm = (req, res, next) => {
  res.render("pages/driver/form-edit", { navLocation: "driver" });
};
