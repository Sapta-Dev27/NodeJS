const product = require("../models/model")
const { params } = require("../routes/routes")

const getAllProducts = async (req, res) => {
  try {
    try {
      const getProductsFromDB = await product.find({});
      
      if (getProductsFromDB ?.length > 0) {
        return res.status(200).json({
          success: true,
          message: " Products are in DB ",
          data: getProductsFromDB
        })
      }
      else {
        return res.status(404).json({
          success: false,
          message: " No products in DB . Add one 1st ",
        })
      }
    }
    catch (error) {
      console.log(error)
    }
  }
  catch {
    res.status(500).json({
      sucess: false,
      message: "Internal Server Error"
    })
  }
}

const getOneProduct = async (req, res) => {
  try {
    try {
      const getOneProductId = req.params.id;
      const getOneProductFromDB = await product.findById(getOneProductId);
      if (getOneProductFromDB) {
        return res.status(200).json({
          success: true,
          message: "Product is  found ",
          data : getOneProductFromDB
        })
      }
      else {
        return res.status(404).json({
          success: false,
          message: "Product is not found . Try different Product"
        })
      }
    }
    catch(error){
      console.log(error)
    }
  }
  catch {
    res.status(500).json({
      sucess: false,
      message: "Internal Server Error"
    })
  }
}

const addProduct = async (req, res) => {
  try {
    try {
      const addnewProduct = req.body;
      const addProduct = product.create( addnewProduct );
      if (addProduct) {
        res.status(201).json({
          success: true,
          message: " New Product is added sucsessfully"
        })
      }
      else {
        res.status(404).json({
          sucess: false,
          messgae: "Failed to add a Product. Try again once"
        })
      }
    }
    catch (error) {
      console.log(error);

    }
  }
  catch {
    res.status(500).json({
      sucess: false,
      message: "Internal Server Error"
    })
  }
}

const deleteProduct = async (req, res) => {

  try {
    try {
      const getproductId = req.params.id;
      const deleteProductfromDB = await product.findByIdAndDelete(getproductId);
      if (deleteProductfromDB) {
        res.status(200).json({
          success: true,
          message: " Book is deleted successfully"
        });
      }
      else {
        res.status(404).json({
          success: false,
          messgae: "Failed to delete a book . Try again once"
        })
      }

    }
    catch (error) {
      console.log(error)
    }
  }
  catch {
    res.status(500).json({
      sucess: false,
      message: "Internal Server Error"
    })
  }
}


module.exports = { getAllProducts, getOneProduct, deleteProduct, addProduct }