function findLongestWordLength(string){
  let longestWord = "";
  let word = string.split(" ")
  for(let i=0; i < word.length; i++){
      if(longestWord.length < word[i].length){
          longestWord= word[i]
        //   console.log("Longest Word.....",longestWord);
      }
  }
  console.log("Longest Word...",longestWord)
  return longestWord.length;
}
findLongestWordLength("Hi I am, learning JavaScript")