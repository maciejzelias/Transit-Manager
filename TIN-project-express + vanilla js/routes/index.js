var express = require("express");
var router = express.Router();

const AuthController = require("../controllers/authController");
const LangController = require("../controllers/LangController");

router.post("/login", AuthController.signIn);
router.get("/logout", AuthController.signOut);
router.get("/changeLang/:lang", LangController.changeLang);

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { navLocation: "main" });
});

module.exports = router;
