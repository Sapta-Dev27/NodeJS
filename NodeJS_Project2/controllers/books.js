const Book = require("../models/book")
const Author = require("../models/author");
const author = require("../models/author");

const addAuthor = async(req,res) => {
  try {
    const {getauthorname , getauthorbio} = req.body ;

    const addauthor = await Author.create({
       title : getauthorname,
       bio : getauthorbio
    })

    if(addauthor) {
      return res.status(200).json({
        success : true ,
        message : "Author Added Sucessfully",
        data : addauthor
      })
    }

    else {
      return res.status(400).json({
        success : false ,
        message : "Author Not Added"
      })
    }
  }
  catch(error){
     console.log(error)
     return res.status(500).json({
      success : false ,
      message : "Internal Server Error"
     })
  }
}

const addBook = async(req,res) => {
  try {
    const {getbookname , getAuthorId} = req.body ; 

    const addbook = await Book.create({
      title : getbookname ,
      author : getAuthorId
    })

    if(addbook) {
      return res.status(200).json({
        success : true ,
        message : "Book is added ",
        data : addbook,
      })
    }
    else {
      return res.status(400).json({
        success : false ,
        message : "Book not added"
      })
    }
  }
  catch(error) {
    console.log(error);
    return res.status(500).json({
      success : false ,
      message : "Internal Server Error"
    })
  }
}

const addBookWithAuthor = async(req,res) => {
  try {
    const addbookwithauthor = await Book.findById(req.params.id).populate("author")
    if (addbookwithauthor) {
      return res.status(200).json({
        success : true ,
        message : "Book with author added",
        data : addbookwithauthor
      })
    }
    else {
      return res.status(400).json({
        success : false ,
        message : "Book with author cannot be added"
      })
    }
  }
  catch(error) {
    console.log(error);
    return res.status(500).json({
      success : false,
      message :"Internal Server Error"
    })
  }
}


module.exports = {addAuthor , addBook , addBookWithAuthor }