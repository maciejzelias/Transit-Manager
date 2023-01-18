const express = require("express");

const router = express.Router();

const apiAuthController = require("../../apiControllers/AuthAPI");

router.post("/login", apiAuthController.login);

module.exports = router;
