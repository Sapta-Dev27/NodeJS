const mongoose = require("mongoose")

const connectToDb = async () => {
  try {

    try {
      await mongoose.connect("mongodb+srv://saptadev27:saptadev27@cluster0.ztyaoo0.mongodb.net/")
      console.log("Connected to Database")
    }
    catch(error){
      console.log(error)
    }

  }
  catch {
   console.log("Connection Failed")
  }
}

module.exports = connectToDb;