const express = require("express");

const router = express.Router();
const {addProducts , getGroupedProducts ,  getProductsAnalystics} = require("../controllers/products")

router.post("/add", addProducts);
router.get("/getGrouped" , getGroupedProducts);
router.get("/getAnalytics" ,  getProductsAnalystics)

module.exports = router