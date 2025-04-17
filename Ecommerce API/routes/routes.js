const express = require("express")
const {getAllProducts , getOneProduct , deleteProduct , addProduct} = require("../controllers/controls")
const router = express.Router();

router.get("/getProducts" ,getAllProducts);
router.get("/getProduct/:id" , getOneProduct);
router.post("/addProduct" , addProduct);
router.delete("/deleteProduct/:id" , deleteProduct);

module.exports = router ;