const mongoose = require("mongoose")

const AuthorSchema = new mongoose.Schema({
  title : {
    type : String ,
    required : true 
  },
  bio : {
    type : String ,
    required : true 
  }
})

module.exports = mongoose.model("author" , AuthorSchema)