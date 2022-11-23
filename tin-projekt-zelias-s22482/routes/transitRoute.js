
const express = require('express');
const router = express.Router();
const transitController = require("../controllers/transitController");

router.get('/',transitController.showTransitsList);
router.get('/add',transitController.showAddTransitForm);
router.get('/details/:transitId', transitController.showTransitDetails);
router.get('/edit/:transitId',transitController.showEditTransitForm);

module.exports = router;