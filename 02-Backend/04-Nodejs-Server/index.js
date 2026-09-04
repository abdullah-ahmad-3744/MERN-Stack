const http = require('http');
const server = http.createServer((req,res) => {

    if (req.url === '/') {
        res.end('Welcome to Home Page')
    }else if (req.url === '/contact') {
        res.end('Welcome to Contact Page')
    } else if (req.url === '/services') {
        res.end('Welcome to Services Page')
    } else if (req.url === '/login') {
        res.end('Welcome to Login Page')
    } else {
        res.end('Page Not Found. Error 404 ')
    }
})

server.listen(4000, () => {
    console.log('Server is listening at port 4000');
})