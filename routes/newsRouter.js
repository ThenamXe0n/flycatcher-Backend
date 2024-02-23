const express = require("express");
const router = express.Router();
const { postNews, getNews } = require("../controller/newsController");

router.get("/show",getNews)
router.post("/add", postNews);

module.exports = router;