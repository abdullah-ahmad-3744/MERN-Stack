const express = require('express');
const app = express()


app.use('/login', (req,res) => {
    res.send('Welcome to Login Page')
})
app.use('/services', (req,res) => {
    res.send('Welcome to Services Page')
})
app.use('/contact',(req,res) => {
    res.send('Welcome to Contact Page')
})
app.use('/',(req,res) => {
    res.send('Welcome to Home Page')
})
app.listen(4000,() => {
    console.log('Server is listening at port 4000');
})