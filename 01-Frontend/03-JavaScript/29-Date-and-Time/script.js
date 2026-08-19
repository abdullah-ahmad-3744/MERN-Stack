const currentDate = new Date();
const currentDateFormat = `Current Date and Time: ${currentDate}`;
console.log(currentDateFormat);
function formatDateMMDDYYYY(date){
  const formatedDate = date.toLocaleDateString('en-US');
  return `Formatted Date (MM/DD/YYYY): ${formatedDate}`
}
console.log(formatDateMMDDYYYY(currentDate))

function formatDateLong(date){
  const formattedDate = date.toLocaleDateString('en-US',{
    year: 'numeric',
    month: 'long',
    day : 'numeric'
  })
  return `Formatted Date (Month Day, Year): ${formattedDate}`
}

console.log(formatDateLong(currentDate));
