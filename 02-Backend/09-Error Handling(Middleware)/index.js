const express = require('express');
const app = express();
const PORT = 4000;


app.get('/',(req,res) => {
    res.send('Welcome to Home Page')
})
app.listen(PORT,() => {
    console.log(`App is listening at PORT : ${PORT}`);
})