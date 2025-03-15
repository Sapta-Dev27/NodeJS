const express =  require('express');
const app = express();
const port = 3000 ;

const myFirstMiddleware = ( req, res , next) => {
  console.log("This will run on every request");
  next();
}

app.use(myFirstMiddleware);

app.get('/',(req,res) => {
  res.send("Hello From the Home Page");
})

app.get('/products' , (req, res) => {

  const product = [
    {
      id : 1 ,
      productName : " Iphone 16" ,
    } ,
    {
      id : 2 ,
      productName : " Iphone 15" ,
    } ,
    {
      id : 3 ,
      productName : " Iphone 14" ,
    } ,
  ]
  res.json(product);
})

app.get('/products/:id' , (req,res) => {
  const productId = parseInt(req.params.id);
  const product = [
    {
      id : 1 ,
      productName : " Iphone 16" ,
    } ,
    {
      id : 2 ,
      productName : " Iphone 15" ,
    } ,
    {
      id : 3 ,
      productName : " Iphone 14" ,
    } ,
  ]

  const getSingleProduct = product.find((product) => product.id === productId);
  if (getSingleProduct) {
    res.json(getSingleProduct)
  }
  else {
    res.status(404).send("The Given Product is not present . Try finding some other ID")
  }

})

app.listen(port, () => {
  console.log(`Port is Running at ${port}`)
})