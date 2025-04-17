const mongoose = require("mongoose")

const connectToDb = async () => {
  try {
    try {
      await mongoose.connect("mongodb+srv://saptadev27:saptadev27@cluster0.lofv3yp.mongodb.net/")
      console.log("Database is connected successfully")
    }
    catch (error) {
      console.log(error)
    }
  }
  catch {
    console.log("Database is not connected ")
  }
}

module.exports = connectToDb;