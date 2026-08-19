/* Question 1 
Instructions:

1. Create a function named maskEmail that accepts an email address as a parameter.
2. Find the position of the "@" symbol to separate the username from the domain.
3. Keep the first and last characters of the username visible.
4. Extract the characters between the first and last username characters.
5. Count the number of extracted characters and replace each of them with an asterisk (*).
6. Combine the first character, the generated asterisks, the last username character, and the original domain to create the masked email address.
7. Return the masked email from the function.
8. Outside the function, declare an email variable, call the maskEmail function with it, and print the returned masked email to the console.
*/

const email = "apple.pie@example.com";
function maskEmail(email){
  let endIndex = email.indexOf("@") - 1;
  const targetString = email.slice(1,endIndex)
  const numOfChars = email.slice(1,endIndex).length
  const maskChars = targetString.replace(targetString,"*")
  const maskedEmail = email.slice(0,1) + maskChars.repeat(numOfChars) + email.slice(endIndex);
  return maskedEmail;
}

console.log(maskEmail(email))



/* Question 2
Step-by-step Instructions:

1. Declare variables to store the minimum income and minimum credit score required for duplex, condo, and car loans.
2. Create a function named getLoanMessage that accepts annualIncome and creditScore as parameters.
3. Inside the function, first check if the applicant qualifies for a duplex loan by comparing the annual income and credit score with the duplex requirements. If they do, return the duplex loan message.
4. If the applicant does not qualify for a duplex loan, check if they qualify for a condo loan. If they do, return the condo loan message.
5. If the applicant does not qualify for a condo loan, check if they qualify for a car loan. If they do, return the car loan message.
6. If none of the loan requirements are met, return a message indicating that the applicant does not qualify for any loans.
7. Outside the function, create variables that call getLoanMessage() with different income and credit score values to test each possible outcome.
8. Log each returned message to the console to verify that the function works correctly.
*/

const minIncomeForDuplex = 60000;
const minCreditScoreForDuplex = 700;

const minIncomeForCondo = 45000;
const minCreditScoreForCondo = 680;

const minIncomeForCar = 30000;
const minCreditScoreForCar = 650;

function getLoanMessage(annualIncome, creditScore) {
  if(creditScore >= minCreditScoreForDuplex && annualIncome >= minIncomeForDuplex) {
    return "You qualify for a duplex, condo, and car loan."
  } else if (annualIncome >= minIncomeForCondo && creditScore >= minCreditScoreForCondo) {
    return "You qualify for a condo and car loan."
  } else if (annualIncome >= minIncomeForCar && creditScore >= minCreditScoreForCar) {
    return "You qualify for a car loan."
  } else {
    return "You don't qualify for any loans."
  }
}

const duplexLoanMsg = getLoanMessage(85000, 850);
const condoLoanMsg  = getLoanMessage(65000, 690);
const carLoanMsg    = getLoanMessage(45000, 660);
const noLoanMsg     = getLoanMessage(25000, 550);
console.log(duplexLoanMsg);
console.log(condoLoanMsg);
console.log(carLoanMsg);
console.log(noLoanMsg);


/* 
Question 3
Step-by-step Instructions:
1. Declare a global variable named `count` and initialize it to `0`. This variable will keep track of the running card count.
2. Create a function named `cardCounter` that accepts one parameter called `card`.
3. Inside the function, first determine whether the card is a number (between 3 and 9) or a face card/string (such as "J", "Q", "K", or "A"), and log an appropriate message to the console.
4. Check the value of the card:
   - If the card is between 2 and 6 (inclusive), increase `count` by 1.
   - If the card is between 7 and 9 (inclusive), leave `count` unchanged.
   - If the card is 10, "J", "Q", "K", or "A", decrease `count` by 1.
   - If the card does not match any valid value, log "Do Nothing".
5. Display the current value of `count` before making the betting decision.
6. If `count` is greater than 0, return a string in the format:
   "<count> Bet"
   indicating that the player should bet.
7. If `count` is less than or equal to 0, return a string in the format:
   "<count> Hold"
   indicating that the player should hold.
8. Test the function by calling `cardCounter()` multiple times with different card values (numbers and face cards) and log the returned result to the console to verify that the card counting logic works correctly.
*/

let count = 0;
function cardCounter(card){
    if (card > 2 && card < 10) {
        Number(card)
        console.log("Card is Number")
    } else {
        String(card)
        console.log("Card is a string")
    }
    if(card >= 2 && card <= 6){
        count += 1;
    } else if (card >= 7 && card <= 9) {
        count += 0;
    } else if ([10,"J","Q","K","A"].includes(card)){
        count -= 1;
    } else {
        console.log("Do Nothing")
    }
    console.log("Bsfore",count)
    if(count > 0) {
        console.log(`${count} Bet`)
        return `${count} Bet`
    } else if (count <= 0) {
        console.log(`${count} Hold`)
        return `${count} Hold`
    } else {
        console.log("Do Nothing")
    }
    console.log('Function is running')
    console.log("After",count)
}