console.log('I am first');


// CJS : Common JS Module. By default nodejs support common js module.


//  Running both files at once , I need my second.js code in first.js to run it from the first.js
const {sum,sub}= require('./second.js')

console.log("Output of sum after module.exports  : ",sum(3,4));
console.log("Output of sub after exporting : ",sub(100,40));

// Sum can not be accessed as becuase the code of second file is wrapped in a fucntion and  imported in the form of the IFFI function , so the code will be executed immediatley.

// (function (){
//     console.log('I am second');

// function sum (a,b) {
//     console.log(a + b);
// }
// })    