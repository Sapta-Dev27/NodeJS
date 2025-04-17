require("dotenv").config();
const mongoose = require("mongoose")


const connectToDb = async (req,res) => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("Database is connected succesfully")
  }
  catch(error){
    console.log(error);
  }
}

module.exports = connectToDb;