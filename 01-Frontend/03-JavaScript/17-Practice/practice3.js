function chunkArrayInGroups(array,number){
     let twoDimensionalArray = [];
     let sortedArray = array.sort((a,b) => a-b) 
     let index = 0;
     
     while(index < array.length){
         let smallerArray = sortedArray.slice(index, index + number)
         twoDimensionalArray.push(smallerArray)
         index += number;
     }
  return twoDimensionalArray;
}

console.log(chunkArrayInGroups([1,8,2,4,5,3,6,7,9],3));
