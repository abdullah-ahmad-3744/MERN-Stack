// In this workshop, you will practice working with the includes() and slice() methods. To begin, create a variable named fccSentence and assign it the string "freeCodeCamp is a great place to learn web development."
const fccSentence = "freeCodeCamp is a great place to learn web development.";


// Use console.log() to log "Here are some examples of the includes() method:" to the console.
console.log("Here are some examples of the includes() method:");


// Create a variable named hasFreeCodeCamp. Then assign it the result of using the includes() method on fccSentence to check if it contains "freeCodeCamp". 
const hasFreeCodeCamp = fccSentence.includes("freeCodeCamp");

// Now log the message fccSentence.includes("freeCodeCamp") returns <hasFreeCodeCamp> because the word "freeCodeCamp" is in the sentence. to the console. Replace <hasFreeCodeCamp> with the actual value of the variable
console.log(`fccSentence.includes("freeCodeCamp") returns ${hasFreeCodeCamp} because the word "freeCodeCamp" is in the sentence.`);

// Now it is time to see what happens when the substring is NOT found.
// Create a variable named hasJavaScript. Then assign it the result of using the includes() method to check if fccSentence includes "JavaScript". Then log the message fccSentence.includes("JavaScript") returns <hasJavaScript> because the word "JavaScript" is not in the sentence. to the console. Replace <hasJavaScript> with the actual value of the variable.
const hasJavaScript = fccSentence.includes("JavaScript");
console.log(`fccSentence.includes("JavaScript") returns ${hasJavaScript} because the word "JavaScript" is not in the sentence.`);



// The includes() method is case-sensitive. Create a variable named hasLowercaseFCC. Then assign it the result of using the includes() method to check if fccSentence includes "freecodecamp". Then log the message fccSentence.includes("freecodecamp") returns <hasLowercaseFCC> because includes is case-sensitive. to the console.
const hasLowercaseFCC = fccSentence.includes("freecodecamp");
console.log(`fccSentence.includes("freecodecamp") returns ${hasLowercaseFCC} because includes is case-sensitive.`);


// Create a message varibalr with the text "Welcome to freeCodeCamp!"
const message = "Welcome to freeCodeCamp!";


console.log("Here are some examples of the slice() method:");


// Create a variable named platform. Then assign it the result of using message.slice(11, 23) to extract "freeCodeCamp".  Now log the result of using the slice() method.Log the message The word "<platform>" was sliced from the message. to the console.
const platform = message.slice(11, 23);
console.log(`The word "${platform}" was sliced from the message.`);


// Extracting from the beginning of a string. Create a variable named greetingWord. Then assign it the result of using message.slice(0, 7) to extract the first word "Welcome". Then log the message The first word is "<greetingWord>". to the console.
const greetingWord = message.slice(0, 7);
console.log(`The first word is "${greetingWord}".`);


// Create a variable named endPunctuation. Then assign it the result of using message.slice(-1) to extract the last character.
// Then log the message The ending punctuation mark is a "<endPunctuation>" to the console.
const endPunctuation = message.slice(-1);
console.log(`The ending punctuation mark is a "${endPunctuation}"`);

// As a final step, log the message: "Workshop complete! You now know how to use includes() and slice()."
console.log("Workshop complete! You now know how to use includes() and slice().")