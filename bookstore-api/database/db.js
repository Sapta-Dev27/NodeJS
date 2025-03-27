const mongoose = require("mongoose")

const connectToDb = async () => {
  try {

    try {
      await mongoose.connect("URL_of_mongodb")
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
