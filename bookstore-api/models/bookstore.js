const mongoose = require("mongoose");

const BookStoreSchema = new mongoose.Schema( {
  title : {
    type : String ,
    required : [ true , " Book Title must be provided"] ,
    trim : true ,
    maxLength :[ 100 , " Book name length must be less than 100"]
  } ,
  authorName : {
    type : String ,
    required : true ,
    trim : true ,
  } , 
  publishedDate : {
    type : Number ,
    default : Date.now(),
  }
})

module.exports = mongoose.model("BookStore" , BookStoreSchema)