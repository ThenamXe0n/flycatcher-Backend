const express = require("express");
const { userLogin } = require("../controller/authController");
const userRouter = require("../routes/userRouter");
const {createUser} = require("../controller/authController");
const productRouter = require("../routes/productRouter");
const orderRouter = require("../routes/orderRouter")
const categoryRouter = require("../routes/categoryRouter");
const cartRouter = require("../routes/cartRouter");
const brandRouter =  require("../routes/brandRouter")
const newsRouter = require("../routes/newsRouter")
const wishlistRouter = require("../routes/wishlistRouter")
const {checkAuthorization} =require('../controller/authController');

const router = express.Router();
router.post("/register", createUser);
router.post("/login", userLogin);
router.use("/auth",checkAuthorization);
router.use("/user", userRouter);
router.use("/cart",cartRouter);
router.use("/brand",brandRouter);
router.use("/order",orderRouter);
router.use("/product",productRouter);
router.use("/category",categoryRouter);
router.use("/news",newsRouter);
router.use("/wishlist",wishlistRouter)


module.exports = router;
