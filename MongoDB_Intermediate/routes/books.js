const express = require("express");
const router = express.Router();

const {addAuthor , addBook , addBookWithAuthor} = require("../controllers/books")


router.post("/author" , addAuthor);
router.post("/book" , addBook);
router.get("/bookwithauthor/:id" , addBookWithAuthor);

module.exports = router
