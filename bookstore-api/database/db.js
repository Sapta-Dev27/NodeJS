const mongoose = require("mongoose")

const connectToDb = async () => {
  try {

    try {
      await mongoose.connect("url")
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
