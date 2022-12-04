const DriverRepository = require("../repository/sequelize/DriverRepository");
const authUtil = require("../util/authUtils");

exports.signIn = (req, res, next) => {
  const login = req.body.login;
  const password = req.body.password;
  DriverRepository.findByLogin(login)
    .then((driver) => {
      if (!driver) {
        res.render("index", {
          navLocation: "",
          loginError: "Nieprawidlowy login lub haslo",
        });
      } else if (
        authUtil.comparePasswords(password, driver.password) === true
      ) {
        req.session.loggedUser = driver;
        res.redirect("/");
      } else {
        res.render("index", {
          navLocation: "",
          loginError: "Nieprawidlowy login lub haslo",
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.signOut = (req, res, next) => {
  req.session.loggedUser = undefined;
  res.redirect("/");
};
