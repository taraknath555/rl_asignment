const express = require("express");
const bookController = require("../controllers/bookController");
const router = express.Router();

router.route("/show").get(bookController.getBooks);

module.exports = router;
