console.log('I am second');

function sum (a,b) {
    return a + b
}

function sub(a,b){
    return a - b 
}
console.log("Output of sum with IFFI expression : ",sum(10,20));

console.log("Output of sub with IFFI expression : ",sub(50,20));

 // This call is valid as this call will be wrapped in the IFFI function when the code of second.js is imported in the first.js file.
// module.exports = sum // exporting single item or function

module.exports = {sum,sub} // exporting multiple item or functions 