const express = require("express");
const {createBrands, fetchBrands} = require("../controller/brandController")
const router = express.Router();

router.post("/add",createBrands);
router.get("/show",fetchBrands)

module.exports = router