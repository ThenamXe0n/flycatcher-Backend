const express = require("express");
const {addOrders, fetchOrderByUserId} = require("../controller/orderController");
const router = express.Router();

router.get("/show",fetchOrderByUserId)
router.post("/addorder",addOrders)

module.exports = router