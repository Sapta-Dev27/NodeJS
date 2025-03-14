const fs = require('fs')

fs.appendFile("firstfile.txt" , "Hello " , (err,data) => {
  if(err) {
    console.log(err)
  }
  else {
    fs.appendFile("secondfile.txt" , "Hello from 2nd File" ,  (error ,data) => {
      if(error){
        console.log(error)
      }
      else {
        fs.unlink("firstfile.txt" , (err,data) => {
          if(err) {
            console.log(err)
          }
          else {
            console.log("File deleted")
          }
        })
      }
    })
  }
})