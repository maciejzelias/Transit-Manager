const express = require("express");
const router = express.Router();
const driverController = require("../controllers/driverController");

router.get("/", driverController.showDriversList);
router.get("/add", driverController.showAddDriverForm);
router.get("/details/:driverId", driverController.showDriverDetails);
router.get("/edit/:driverId", driverController.showEditDriverForm);

module.exports = router;
