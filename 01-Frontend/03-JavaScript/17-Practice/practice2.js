function mutation(array) {
  let first = array[0].toLowerCase();
  let second = array[1].toLowerCase();

  for (let i = 0; i < second.length; i++) {
    if (!first.includes(second[i])) {
      return false;
    }
  }

  return true;
}
console.log(mutation(["hello","Hello"])); // should be true
console.log(mutation(["Muhammad","Abdullah"]));  // should be false
console.log(mutation(["Abdullah","Abdullah"])); // should be true
