// Step 1: Create a variable called botName and assign it the string "MathBot". Then create a greeting message using the botName variable and log it to the console.
// Step 2: Log a message explaining how the Math.random() method works.
// Step 3: Create a variable called randomNum, assign it the result of Math.random(), and log it to the console.
// Step 4: Log a message about generating a random number between two values.
// Step 5: Create variables called min and max with the values 1 and 100.
// Step 6: Create a variable called randomNum2 to generate a random number between min and max, then log the result.
// Step 7: Log a message explaining how the Math.floor() method works.
// Step 8: Create a variable called numRoundedDown using Math.floor() to round 6.7 down, then log the result.
// Step 9: Log a message about generating a random integer between two values.
// Step 10: Create a variable called randomInt to generate a random integer between min and max, then log the result.
// Step 11: Log a message explaining how the Math.ceil() method works.
// Step 12: Create a variable called numRoundedUp using Math.ceil() to round 3.2 up, then log the result.
// Step 13: Log a message explaining how the Math.round() method works.
// Step 14: Create variables called numRounded and numRounded2 using Math.round() to round 2.7 and 11.2, then log both results.
// Step 15: Log a message explaining how the Math.max() and Math.min() methods work.
// Step 16: Create variables called maxNum and minNum using Math.max() and Math.min(), then log both results.
// Step 17: Log the final farewell message to the console.


// Step 1: 
const botName = "MathBot";
const greeting = `Hi there! My name is ${botName} and I am here to teach you about the Math object!`;
console.log(greeting);

// Step 2: 
console.log(
  "The Math.random() method returns a pseudo random number greater than or equal to 0 and less than 1."
);

// Step 3: 
const randomNum = Math.random();
console.log(randomNum);

// Step 4: 
console.log("Now, generate a random number between two values.");

// Step 5: 
const min = 1;
const max = 100;

// Step 6: 
const randomNum2 = Math.random() * (max - min) + min;
console.log(randomNum2);

// Step 7: 
console.log(
  "The Math.floor() method rounds the value down to the nearest whole integer."
);

// Step 8: 
const numRoundedDown = Math.floor(6.7);
console.log(numRoundedDown);

// Step 9: 
console.log("Now, generate a random integer between two values.");

// Step 10: 
const randomInt = Math.floor(Math.random() * (max - min) + min);
console.log(randomInt);

// Step 11: 
console.log(
  "The Math.ceil() method rounds the value up to the nearest whole integer."
);

// Step 12: 
const numRoundedUp = Math.ceil(3.2);
console.log(numRoundedUp);

// Step 13: 
console.log(
  "The Math.round() method rounds the value to the nearest whole integer."
);

// Step 14:
const numRounded = Math.round(2.7);
console.log(numRounded);
const numRounded2 = Math.round(11.2);
console.log(numRounded2);

// Step 15: 
console.log(
  "The Math.max() and Math.min() methods are used to get the maximum and minimum number from a range."
);

// Step 16: 
const maxNum = Math.max(3, 125, 55, 24);
console.log(maxNum);
const minNum = Math.min(6, 90, 14, 90, 2);
console.log(minNum);

// Step 17: 
console.log("It was fun learning about the different Math methods with you!");


// Define the five fortunes
let fortune1 = "Your cat will look very cuddly today.";
let fortune2 = "The weather will be nice tomorrow.";
let fortune3 = "Be cautious of your new neighbors.";
let fortune4 = "You will find a new hobby soon.";
let fortune5 = "It would be wise to avoid the color red today.";

// Generate a random number between 1 and 5 (inclusive)
let randomNumber = Math.floor(Math.random() * 5) + 1;



// Select the appropriate fortune
let selectedFortune;

if (randomNumber === 1) {
  selectedFortune = fortune1;
} else if (randomNumber === 2) {
  selectedFortune = fortune2;
} else if (randomNumber === 3) {
  selectedFortune = fortune3;
} else if (randomNumber === 4) {
  selectedFortune = fortune4;
} else if (randomNumber === 5) {
  selectedFortune = fortune5;
}

// Output the selected fortune
console.log(selectedFortune);