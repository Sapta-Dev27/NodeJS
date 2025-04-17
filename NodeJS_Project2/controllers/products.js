const Product = require("../models/products")

const addProducts = async (req, res) => {
  try {
    const { productname, productavailabilty, producttags, productratings, productcateogory, productprice } = req.body;
    const addProducts = await Product.create({
      productName: productname,
      productAvailabilty: productavailabilty,
      productTags: producttags,
      productRatings: productratings,
      productCateogory: productcateogory,
      productPrice: productprice
    })
    if (addProducts) {
      return res.status(201).json({
        success: true,
        message: "Products are added succesfully"
      })
    }
    else {
      return res.status(400).json({
        success: false,
        message: " Products cannot be added "
      })
    }
  }
  catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error"
    })
  }
}


const getGroupedProducts = async (req, res) => {
  try {
    const groupedProducts = await Product.aggregate([
      {
        $match: {
          productAvailabilty: true,
          productPrice: {
            $gte: 200,
          },
          productRatings: {
            $gte: 4,
          }

        }
      },
      {
        $group: {
          _id: "$productCateogory",
          averagePrice: {
            $avg: "$productPrice"
          },
          noOfProductsOfTheGivenCateogory: {
            $sum: 1,
          }
        }
      }
    ])
    if (groupedProducts) {
      return res.status(200).json({
        success: true,
        message: "Products are Grouped successfully",
        data: groupedProducts
      })
    }
    else {
      return res.status(404).json({
        success: false,
        message: "No such product meet the given criterias"
      })
    }
  }
  catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error"
    })
  }
}

const getProductsAnalystics = async (req, res) => {
  try {
    const getAnalytics = await Product.aggregate([
      {
        $match: {
          productCateogory: "Electronics"
        }
      },
      {
        $group: {
          _id : null,
          totalNoOfProducts : {
            $sum : 1,
          },
          totalRevenue: {
            $sum: "$productPrice",
          },
          averagePrice: {
            $avg: "$productPrice"
          },
          maxPrice: {
            $max: "$productPrice"
          },
          minPrice: {
            $min: "$productPrice"
          }
        }
      }
    ])
    if (getAnalytics) {
      return res.status(200).json({
        success: true,
        message: "Product Analytics are obtained",
        data: getAnalytics
      })
    }
    else {
      return res.status(400).json({
        success: false,
        message: "Product analytics not obtained"
      })
    }
  }
  catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error"
    })
  }
}


module.exports = { addProducts, getGroupedProducts, getProductsAnalystics }