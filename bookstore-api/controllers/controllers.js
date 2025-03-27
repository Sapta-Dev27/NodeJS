const Book = require("../models/bookstore");
const { param } = require("../routes/routes");

const getAllBooks = async (req, res) => {
  try {
    const getbook = await Book.find({});
    if (getbook?.length > 0) {
      console.log("Books are present in Databse")
      res.status(200).json({
        success: true,
        message: "Books are present in Database",
        data: getbook,
      })
    }
    else {
      res.status(404).json({
        success: false,
        message: "No Books are present in Database . Add books to retrieve data",
      })
    }
  }
  catch {
    res.status(500).json({
      message: " Some Internal Error occured . Try again later "
    })
  }
}

const getSingleBook = async (req, res) => {
  try {
    const getBookId = req.params.id;
    const getsinglebook = await Book.findById(getBookId);
    if (getsinglebook) {
      res.status(200).json({
        success: true,
        message: "Book Id  searched is Present in database",
        data: getsinglebook,
      })
    }
    else {
      res.status(404).json({
        message: "Book Id serached is not present in database"
      })
    }
  }
  catch {
    res.status(500).json({
      message: "Internal Error took palce . Try again later"
    })
  }

}

const addBook = async (req, res) => {
  try {
    const newbook = req.body;
    const addnewbook = Book.create(newbook);
    if (addnewbook) {
      console.log("New Book is added succesfully");
      res.status(201).json({
        success: true,
        message: "New Book added to the database successfully"
      })
    }
    else {
      res.status(404).json({
        success: false,
        message: " Book cannot be added to the database"
      })
    }
  }
  catch {
    res.status(500).json({
      message: " Some Internal Error took place . Try again please"
    })
  }
}

const deletebook = async (req, res) => {
  try {
    const deletebookId = req.params.id;
    const deleteBook = await Book.findByIdAndDelete(deletebookId);
    if (deleteBook) {
      res.status(200).json({
        success: true,
        message: "Book is deleted succesfully"
      })
    }
    else {
      res.status(404).json({
        message : "Book to be deleted is not present"
      });
    }
  }
  catch {
     res.status(500).json({
      message: " Internal Error Took Place"
     })
  }
}

module.exports = { getAllBooks, getSingleBook, addBook, deletebook }