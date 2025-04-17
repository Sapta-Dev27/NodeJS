const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  productName :  {
    type : String ,
    required : true ,
  },
  productAvailabilty : {
    type : Boolean ,
    required : true ,
  },
  productTags : {
    type : [String],
    required : true ,
  },
  productRatings : {
    type : Number ,
    required : true ,
  },
  productCateogory : {
    type : String ,
    required : true ,
  },
  productPrice : {
    type : Number ,
    required : true ,
  }

})

module.exports = mongoose.model("Product" , ProductSchema)
 