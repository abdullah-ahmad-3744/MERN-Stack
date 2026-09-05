const express = require('express');
const app = express();


// Data Parsing 
app.use(express.json())


// GET request
app.get('/user',(req,res) => {
    res.send({name: "Muhammad Abdullah", city : 'Lahore'})
})
app.get('/',(req,res) => {
    res.send('Welcome to Home Page')
})
// POST request 
app.post('/user',(req,res) => {
    console.log(req.body);
    console.log('Data saved successfully');
    res.send("Data saved successfully")
})
app.listen(4000,() => {
    console.log('Server is listening at PORT:4000');
})