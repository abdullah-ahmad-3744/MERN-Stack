// Problem 1;

let lunches = [];
function addLunchToEnd(array,string){
  const updatedArray = array.push(string);
  console.log(`${string} added to the end of the lunch menu.`)
  return array;

}
function addLunchToStart(array,string){
  const updatedArray = array.unshift(string);
  console.log(`${string} added to the start of the lunch menu.`);
  return array;
}

function removeLastLunch(array){
  if (array.length === 0) {
    console.log("No lunches to remove.");
  } else {
    const removedElement = array.pop()
  console.log(`${removedElement} removed from the end of the lunch menu.`);
  }
  return array;
}

function removeFirstLunch (array) {
  if(array.length === 0) {
    console.log("No lunches to remove.")
  } else {
    const removedElement = array.shift();
    console.log(`${removedElement} removed from the start of the lunch menu.`)
  }
  return array

}

function getRandomLunch(array) {
  if(array.length === 0) {
    console.log("No lunches available.");
  }else {
    const randomElement = Math.floor(Math.random() * array.length)
    console.log(`Randomly selected lunch: ${array[randomElement]}`)
  }
}

function showLunchMenu(array) {
  if(array.length === 0) {
    console.log("The menu is empty.");
  } else {
    if (array.length === 3) {
      console.log(`Menu items: ${array[0]}, ${array[1]}, ${array[2]}`)
    } else {
      console.log(`Menu items: ${array[0]}, ${array[1]}, ${array[2]}, ${array[3]}`)
    }
  }
}
addLunchToEnd(lunches, "Tacos")
addLunchToEnd(["Pizza", "Tacos"], "Burger")
addLunchToStart(lunches, "Sushi")
addLunchToStart(["Burger", "Sushi"], "Pizza")
removeLastLunch(["Stew", "Soup", "Toast"])
removeLastLunch(["Sushi", "Pizza", "Noodles"])
removeFirstLunch(["Salad", "Eggs", "Cheese"])
removeFirstLunch(["Sushi", "Pizza", "Burger"])
showLunchMenu(["Greens", "Corns", "Beans"])
showLunchMenu(["Pizza", "Burger", "Fries", "Salad"]);


// Problem 2

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par,stroke) {
  if (stroke === 1) {
    return "Hole-in-one!";
  } else if (stroke <= par-2) {
    return "Eagle";
  } else if (stroke === par -1) {
    return "Birdie";
  } else if (stroke === par) {
    return "Par";
  } else if (stroke === par + 1) {
    return "Bogey";
  } else if (stroke === par + 2) {
    return "Double Bogey";
  } else if (stroke >= par + 3) {
    return "Go Home!";
  } else {
    return "Do Nothing";
  }
}