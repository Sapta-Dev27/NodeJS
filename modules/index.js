const firstModule = require('./first')
console.log("Addition is " , firstModule.add(10,20))
console.log("Subtraction is " , firstModule.subtract(20,10));
try {
  const result = firstModule.divide(10,0);
  console.log("Division is " , result);
}
catch(error) {
  console.log(error.message);
}
