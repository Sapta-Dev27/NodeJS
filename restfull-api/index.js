const express = require('express');
const app = express();
const port = 3000 ;
app.use(express.json());

const books = [
  {
    id : 1 ,
    title : " Book 1",
  },
  {
    id : 2 ,
    title : " Book 2",
  },
  {
    id : 3 ,
    title : " Book 3",
  },
  {
    id : 4 ,
    title : " Book 4",
  }
]

app.get('/' , (req,res) => {
  res.json( {
    message : "Hello from the Home Page"
  });
})

app.get('/books' , (req,res) => {
  res.json(books);
})

app.get('/books/:id' , (req,res) => {
  const bookid = parseInt(req.params.id);
  const book = books.find((item) => item.id === bookid);
  if (book) {
    res.status(200).json(book)
  }
  else {
    res.status(404).json({
      message : " Book entered is not found . Try with a different book id"
    })
  }
})


app.put('/books/update/:id' , (req,res) => {
  const updatebookid = parseInt(req.params.id);
  const updatebook = books.find((item) => item.id === updatebookid);
  if ( updatebook) {
    updatebook.title = req.body.title || updatebook.title;
    res.status(200).json(updatebook)
  }
  else {
    res.status(404).json( {
      message : " Book id is not found so it cannot be updated"
    })
  }
})

app.listen(port , () => {
  console.log(`Server is ruuning at ${port}`)
}
)