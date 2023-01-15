const express = require("express");
const router = express.Router();
const vehicleController = require("../controllers/vehicleController");

router.get("/", vehicleController.showVehiclesList);
router.get("/add", vehicleController.showAddVehicleForm);
router.get("/details/:vehicleId", vehicleController.showVehicleDetails);
router.get("/edit/:vehicleId", vehicleController.showEditVehicleForm);
router.post("/add", vehicleController.addVehicle);
router.post("/edit", vehicleController.updateVehicle);
router.get("/delete/:vehicleId", vehicleController.deleteVehicle);

module.exports = router;
