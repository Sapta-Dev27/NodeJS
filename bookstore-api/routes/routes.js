const express = require("express")
const { getAllBooks , getSingleBook , addBook , deletebook   } = require("../controllers/controllers")

const router = express.Router();

router.get('/getbooks' , getAllBooks);
router.get('/getSingleBook/:id' , getSingleBook );
router.post('/addbook' , addBook );
router.delete('/deletebook/:id' , deletebook  );

module.exports = router ;