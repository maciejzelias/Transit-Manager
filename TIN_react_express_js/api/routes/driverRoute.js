const express = require("express");
const router = express.Router();
const driverController = require("../controllers/driverController");

router.get("/", driverController.showDriversList);
router.get("/add", driverController.showAddDriverForm);
router.get("/details/:driverId", driverController.showDriverDetails);
router.get("/edit/:driverId", driverController.showEditDriverForm);
router.post("/add", driverController.addDriver);
router.post("/edit", driverController.updateDriver);
router.get("/delete/:driverId", driverController.deleteDriver);

module.exports = router;
