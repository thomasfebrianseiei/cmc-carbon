const express = require("express");
const router = express.Router();
const {getdata,getcoba} = require("../controllers/coin");

router.get("/",getdata);
router.get("/try",getcoba);


module.exports = router;