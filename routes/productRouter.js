const express = require("express");
const { fetchProducts, fetchProductsById, createProducts, fetchProductByCategory} = require('../controller/productController');
const { fetchProductRating, RateProduct } = require("../controller/reviewController");
const router = express.Router();

router.get("/allproducts",fetchProducts)
router.get("/rating",fetchProductRating)
router.get("/show",fetchProductByCategory)
router.get("/:id",fetchProductsById) 
router.post("/add",createProducts)
router.post("/rateproduct",RateProduct)


module.exports = router;