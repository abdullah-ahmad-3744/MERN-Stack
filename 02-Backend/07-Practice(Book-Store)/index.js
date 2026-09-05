const data = require('./data')
const PORT = 5000
const express = require('express');
const app = express();

// Data Parsing to json
app.use(express.json())

// Home page or route 
app.get('/', (req,res) => {
    res.send('Welcome to Home Page')
})

// Get request for all books
app.get('/book',(req,res) => {
    res.send(data)
})
// Get Request for a Book based on ID
app.get('/book/:id',(req,res) => {
    const bookId = parseInt(req.params.id)
    const bookBasedOnId = data.find(book => book.id === bookId )
    res.send(bookBasedOnId)
})

// Post request for saving a book 
app.post('/book',(req,res) => {
    const newBook = req.body;
    data.push(newBook)
    res.send('Data saved successfully')
})

//  Delete request for deleting a book
app.delete('/book/:id',(req,res) => {
    const id = parseInt(req.params.id)
    const index = data.findIndex(book => book.id === id)
    data.splice(index,1)
    res.send('Successfully deleted')
})


// Put request for updating 
app.put('/book', (req,res) => {
    const targetBook = data.find(book => book.id === req.body.id);
    targetBook.author = req.body.author;
    targetBook.name = req.body.name;
    res.send('Changes updated successfully')
})

// patch request for a partial change
app.patch('/book', (req,res) => {
    const targetBook = data.find(book => book.id === req.body.id);
    if (req.body.author) {
        targetBook.author = req.body.author;
    }
    if (req.body.name) {
        targetBook.name = req.body.name;
    }
    
    res.send('Patch updated');
})
app.listen(PORT, () => {
console.log(`App is listening at PORT : ${PORT}`);
})