const express = require("express") ;
require('dotenv').config();
const connectToDb = require("./database/db")
const app = express() ;
const port =  process.env.PORT || 5173 ;
const bookRoutes = require("./routes/routes")

connectToDb();
app.use(express.json()); 

app.use("/bookstore" , bookRoutes);


app.listen(port , () => {
  console.log(`Server is running succesfully on ${port}`)
})