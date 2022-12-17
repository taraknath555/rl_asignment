const express = require("express");
const magazineController = require("../controllers/magazineController");
const router = express.Router();

router.route("/show").get(magazineController.getMagazines);

module.exports = router;
