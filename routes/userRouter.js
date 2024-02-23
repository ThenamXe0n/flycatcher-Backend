const express = require("express");
const { fetchUserById, updateUser } = require("../controller/userController");
const router = express.Router();


router.patch("/update/:id",updateUser)
router.get("/test",(req,res)=>{
    res.send("hello")
    });

router.get("/:id", fetchUserById)


module.exports = router;
