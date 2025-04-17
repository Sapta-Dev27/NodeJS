require("dotenv").config();
const express = require("express");

const app = express();
const Port = process.env.PORT ;

const connectToDB = require("./database/db")
const router = require("./routes/products")
const libraryrouter = require("./routes/books")

app.use(express.json());

app.use("/products" , router)
app.use("/library" , libraryrouter)

connectToDB();
app.listen(Port, () => {
  console.log(`Server is running on ${Port}`)
})

