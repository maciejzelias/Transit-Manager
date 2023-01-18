const DriverRepository = require("../repository/sequelize/DriverRepository");
const config = require("../config/auth/key");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.login = (req, res) => {
  const login = req.body.login;
  const password = req.body.password;
  DriverRepository.findByLogin(login).then((user) => {
    if (!user) {
      return res.status(401).send({ message: "auth_not_valid" });
    }

    bcrypt
      .compare(password, user.password)
      .then((isEqual) => {
        if (!isEqual) {
          return res
            .status(401)
            .send({ message: "auth_not_valid" });
        }
        const token = jwt.sign(
          {
            login: user.login,
            userId: user._id,
          },
          config.secret,
          { expiresIn: "1h" }
        );
        res.status(200).json({ token: token, userId: user._id });
      })
      .catch((err) => {
        console.log(err);
        res.status(501);
      });
  });
};
