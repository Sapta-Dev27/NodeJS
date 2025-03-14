const fs = require('fs');

//creating a File //
fs.appendFile('firstfile.txt' , 'Hello , I am Saptarshi Paul ' , function(error) {
  if(error) {
    console.log(error);
  }
  else {
    console.log("File is Created");
  }
})

//writing in a  File //
fs.appendFile('firstFile.txt' , 'I am a Full Stack Developer ' , function(error) {
  if(error) {
    console.log(error);
  }
  else {
    console.log(" Text is written in File ");
  }
})

// deleting a file //
fs.unlink('secondFile.txt' , function(error) {
   if (error) {
    console.log(error);
   }
   else {
    console.log("File is Deleted ");
   }
})

// renaming a file //
fs.rename('firstFile.txt' , 'newFile.txt' , function(error) {
  if(error) {
    console.log(error)
  }
  else {
    console.log("file is renamed")
  }
})