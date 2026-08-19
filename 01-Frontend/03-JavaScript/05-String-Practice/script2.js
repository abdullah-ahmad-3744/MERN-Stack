// Step 1: Create a variable called userInput and assign it the value "   Hello World!   ".
// // Step 2: Log the string "Original input:" followed by the userInput variable.
// Step 3: Create a variable called cleanedInput and assign it the result of using the trim() method on userInput.
// Step 4: Log the string "Result of trimming whitespace from both ends:" followed by the cleanedInput variable.
// Step 5: Create a variable called trimmedStart and assign it the result of using the trimStart() method on userInput.
// Step 6: Log the string "After using the trimStart() method, leading spaces removed:" followed by the trimmedStart variable.
// Step 7: Create a variable called trimmedEnd and assign it the result of using the trimEnd() method on userInput.
// Step 8: Log the string "After using the trimEnd() method, trailing spaces removed:" followed by the trimmedEnd variable.
// Step 9: Create a variable called upperCaseInput and assign it the result of using the toUpperCase() method on cleanedInput.
// Step 10: Log the string "Result of using the toUpperCase() method:" followed by the upperCaseInput variable.
// Step 11: Create a variable called lowerCaseInput and assign it the result of using the toLowerCase() method on cleanedInput.
// Step 12: Log the string "Result of using the toLowerCase() method:" followed by the lowerCaseInput variable.
// Step 13: Create a variable called lowercaseWord and generate its camelCase version by combining slice(), toUpperCase(), and slice() methods. Then log the result.

// Step 1:
const userInput = "   Hello World!   ";

// Step 2:
console.log("Original input:");
console.log(userInput);

// Step 3: 
const cleanedInput = userInput.trim();

// Step 4:
console.log("Result of trimming whitespace from both ends:");
console.log(cleanedInput);

// Step 5:
const trimmedStart = userInput.trimStart();

// Step 6:
console.log("After using the trimStart() method, leading spaces removed:");
console.log(trimmedStart);

// Step 7:
const trimmedEnd = userInput.trimEnd();

// Step 8: 
console.log("After using the trimEnd() method, trailing spaces removed:");
console.log(trimmedEnd);

// Step 9: 
const upperCaseInput = cleanedInput.toUpperCase();

// Step 10: 
console.log("Result of using the toUpperCase() method:");
console.log(upperCaseInput);

// Step 11: 
const lowerCaseInput = cleanedInput.toLowerCase();

// Step 12: 
console.log("Result of using the toLowerCase() method:");
console.log(lowerCaseInput);

// Step 13: 
const lowercaseWord = "camelcase";
const camelCasedVersion =
  lowercaseWord.slice(0, 5) +
  lowercaseWord[5].toUpperCase() +
  lowercaseWord.slice(-3);

console.log("Camel cased version:");
console.log(camelCasedVersion);