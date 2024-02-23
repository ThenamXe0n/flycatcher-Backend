const express = require("express");
const { createCategory, fetchCategory } = require("../controller/categoryController");
const router = express.Router();

router.post("/", createCategory).get("/allcategory",fetchCategory);

module.exports = router;
