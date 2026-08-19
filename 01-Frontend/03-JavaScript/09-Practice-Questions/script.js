/* 
Question 1
Step-by-step Instructions:
1. Declare a variable named `year` and assign it a year value to test.
2. Create a function named `isLeapYear` that accepts one parameter called `number`, representing a year.
3. Inside the function, first check if the year is divisible by 4.
   - If it is not divisible by 4, return a message stating that the year is not a leap year.
4. If the year is divisible by 4, check whether it is also divisible by 100.
   - If it is not divisible by 100, return a message stating that the year is a leap year.
5. If the year is divisible by 100, check whether it is also divisible by 400.
   - If it is divisible by 400, return a message stating that the year is a leap year.
   - Otherwise, return a message stating that the year is not a leap year.
6. Outside the function, call the `isLeapYear()` function by passing the `year` variable as an argument and store the returned result in a variable named `result`.
7. Log the value of `result` to the console to verify whether the given year is a leap year or not.
*/

const year = 1900;
function isLeapYear(number){
    if(number % 4 == 0) {
        if (number % 100 == 0) {
            if (number % 400 == 0) {
                return `${number} is a leap year.`
            } else {
                return `${number} is not a leap year.`
            }
        } else {
            return `${number} is a leap year.`
        }
    } else {
        return `${number} is not a leap year.`
    }
}
const result =  isLeapYear(year)
console.log(result)


/* 
Question 2
Step-by-step Instructions:
1. Create a function named `truncateString` that accepts two parameters:
   - `string` (the text to be shortened)
   - `number` (the maximum number of characters to keep)
2. Inside the function, check whether the length of the string is greater than the given number.
3. If the string is longer than the specified number:
   - Use the `slice()` method to extract the first `number` characters.
   - Store the sliced portion in a new variable.
   - Append `"..."` to the end of the sliced string.
   - Return the updated truncated string.
4. If the string length is less than or equal to the specified number, simply return the original string without making any changes.
5. Outside the function, call `truncateString()` by passing a sample string and a maximum length value.
6. Verify that the function returns:
   - The shortened string followed by `"..."` when the original string exceeds the specified length.
   - The original string when its length is within the specified limit.
*/

function truncateString(string,number) {
  if(string.length > number) {
    const slicedString = string.slice(0,number);
    const finalUpdatedString = slicedString + "..."
    return finalUpdatedString;

  } else {
    return string
  }
}
truncateString("Hello Word",5)

function confirmEnding (originalString,checkerString){
    const slicedString = checkerString.slice(0,checkerString.length)
    const slicedIndex = slicedString.length
    const targetindexOfOriginal = originalString.length-slicedIndex
    if(originalString.includes(slicedString,targetindexOfOriginal)) {
        return true
    } else {
        return false
    }
}