const express = require("express")
require("dotenv").config();
const connectToDb = require("./database/db")
const getAllRoutes = require("./routes/routes")

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;
connectToDb();

app.use("/shopify" , getAllRoutes)

app.listen(PORT , () => {
  console.log(`Server is running on the ${PORT}`)
})

