const textArea = document.querySelector("#text-input")
const charCount = document.querySelector("#char-count")
let currCount = textArea.value.length;

function characterHandler(textArea){
  if(textArea.value.length <= 50){
    currCount = textArea.value.length;
    charCount.textContent = `Character Count: ${currCount}/50`;
  }
  if (textArea.value.length >= 50){
    charCount.style.color = "red"
  } else {
    charCount.style.color = "black"
  }
  if(textArea.value.length >=50){
    textArea.value = textArea.value.slice(0,50);
  }
}
textArea.addEventListener("input",()=>{
  characterHandler(textArea);
})