const express = require('express');
const app = express();
const PORT = 3000;


// app.use('/user',(req,res) => {
//     console.log('First function');
//     res.send('Hello I am first')
// })

// app.use('/user',(req,res,next) => {
//     console.log('First');
//     // res.send('First Response')
//     next()
//     console.log('Sixth');
// })

// app.use('/user',(req,res,next) => {
//     console.log('Second');
//     // res.send('Second Response')
//     next()
//     console.log('Fifth');
// })


// app.use('/user',(req,res,next) => {
//     console.log('Third');
//     res.send('Third Response')
//     console.log('Fourth');
//     // next()
// })

// app.use('/user',(req,res) => {
//     res.send('Fourth Response')
// })

// Dealing with logs thorough middleware
app.use('/user',(req,res,next) => {
    console.log(`Date : ${Date.now()} , Method : ${req.method}, URL : ${req.url}`);
    next()
})
app.get('/user',(req,res) => {
    // console.log(`Date:${Date.now()} , Method:${req.method}, URL:${req.url}`); // This will be handled via middleware
    res.send('Response for Get request')
})
app.post('/user',(req,res) => {
    // console.log(`Date:${Date.now()} , Method:${req.method}, URL:${req.url}`); // This will be handled via middleware
    res.send('Response for Post request')
})
app.put('/user',(req,res) => {
    // console.log(`Date:${Date.now()} , Method:${req.method}, URL:${req.url}`); // This will be handled via middleware
    res.send('Response for Put request')
})
app.delete('/user',(req,res) => {
    // console.log(`Date:${Date.now()} , Method:${req.method}, URL:${req.url}`); // This will be handled via middleware
    res.send('Response for Delete request')
})


app.listen(PORT,() => {
    console.log(`App is listening at PORT : ${PORT}`);
})