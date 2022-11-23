const express = require("express");
const router = express.Router();
const vehicleController = require("../controllers/vehicleController");

router.get("/", vehicleController.showVehiclesList);
router.get("/add", vehicleController.showAddVehicleForm);
router.get("/details/:vehicleId", vehicleController.showVehicleDetails);
router.get("/edit/:vehicleId", vehicleController.showEditVehicleForm);

module.exports = router;
