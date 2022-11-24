const express = require("express");
const router = express.Router();

const transitApiController = require("../../api/TransitAPI");

router.get("/", transitApiController.getTransits);
router.get("/:transitId", transitApiController.getTransitById);
router.post("/", transitApiController.createTransit);
router.put("/:transitId", transitApiController.updateTransit);
router.delete("/:transitId", transitApiController.deleteTransit);

module.exports = router;
