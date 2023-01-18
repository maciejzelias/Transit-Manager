const express = require("express");
const router = express.Router();

const driverApiController = require("../../apiControllers/DriverAPI");
const isAuth = require("../../middleware/isAuth");

router.get("/", driverApiController.getDrivers);
router.get("/:driverId", driverApiController.getDriverById);
router.post("/", driverApiController.createDriver);
router.put("/:driverId", driverApiController.updateDriver);
router.delete("/:driverId", isAuth, driverApiController.deleteDriver);

module.exports = router;
