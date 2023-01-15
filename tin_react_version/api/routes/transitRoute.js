const express = require("express");
const router = express.Router();
const transitController = require("../controllers/transitController");

router.get("/", transitController.showTransitsList);
router.get("/add", transitController.showAddTransitForm);
router.get("/details/:transitId", transitController.showTransitDetails);
router.get("/edit/:transitId", transitController.showEditTransitForm);
router.post("/add", transitController.addTransit);
router.post("/edit", transitController.updateTransit);
router.get("/delete/:transitId", transitController.deleteTransit);

module.exports = router;
