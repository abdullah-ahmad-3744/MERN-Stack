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
    const targetBookId = parseInt(req.params.id)
    console.log(targetBookId);
    const updatedData = data.filter( (book) => book.id !== targetBookId)
    res.send(updatedData)
})
app.listen(PORT, () => {
console.log(`App is listening at PORT : ${PORT}`);
})