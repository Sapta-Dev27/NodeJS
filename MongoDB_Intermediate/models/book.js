const mongoose = require("mongoose");


const BookSchema = new mongoose.Schema ({
  title : {
    type : String ,
    required : true ,
  },
  author : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "author",
    required : true
  }
})

module.exports = mongoose.model("Book" , BookSchema)