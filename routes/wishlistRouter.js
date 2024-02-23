const {addToWishlist,getUserWishlistItem, removeWishlistItem, updateWishlistItem} = require("../controller/wishlistController")
const express = require("express");
const router = express.Router()

router.get("/show",getUserWishlistItem);
router.get("/update",updateWishlistItem);
router.post("/add",addToWishlist);
router.post("/remove",removeWishlistItem);


module.exports = router;