const http = require('http')
const port = 3000;
http.createServer((req,res) => {

   res.writeHead(200, {'context-text' : 'text/html'});
   const url = req.url;

   if ( url === '/'){
    res.write("Welcome to the Home Page");
    res.end();
   }

   else if( url === '/about'){
    res.write(" Welcome from the about page ");
    res.end();
   }

   else if( url === '/contact') {
    res.write("Welcome from the Contact Page");
    res.end();
   }

   else {
    res.write("page not found");
    res.end();
   }
}).listen(port , () => {
  console.log(`Port is running at the ${port}`)
});