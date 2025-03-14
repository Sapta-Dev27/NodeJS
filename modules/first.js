function add(a,b) {
  return a + b ;
}
function subtract(a,b) {
  return a-b ;
}
function divide(a,b){
  if ( b === 0 ) {
    throw new Error("Num is not divided by 0")
  }
  return a/b;
}
module.exports = {add, subtract , divide}