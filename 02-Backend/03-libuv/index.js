const fs = require('fs')
let userName = 'Muhammad Abdullah';
let useAge = 25;
let greeting = 'Hello ji'

console.log(greeting);

function sum(a,b) {
    return a + b
}


fs.readFile('./data.json', 'utf-8', (err,res) => {
    console.log(res);
})
setTimeout( () => {
    console.log('Time Out');
},3000)

console.log(userName);
console.log(sum(10,20));