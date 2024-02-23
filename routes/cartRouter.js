const express = require("express");
const {addToCart, fetchAllCartItems, fetchCartByUserId, deleteCartItem, updateUserCart, clearUserCart}=require('../controller/cartController');
const router = express.Router();

router.get("/",fetchAllCartItems)
router.get("/show",fetchCartByUserId)
router.post("/add",addToCart)
router.post("/clear",clearUserCart)
router.post("/remove",deleteCartItem)


module.exports = router