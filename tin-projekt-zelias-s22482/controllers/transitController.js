exports.showTransitsList = (req, res, next) => {
  res.render("pages/transit/list", { navLocation: "transit" });
};

exports.showAddTransitForm = (req, res, next) => {
  res.render("pages/transit/form", { navLocation: "transit" });
};

exports.showTransitDetails = (req, res, next) => {
  res.render("pages/transit/details", { navLocation: "transit" });
};

exports.showEditTransitForm = (req, res, next) => {
  res.render("pages/transit/form-edit", { navLocation: "transit" });
};
