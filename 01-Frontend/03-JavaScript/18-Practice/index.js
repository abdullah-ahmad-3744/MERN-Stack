let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, property) {
  for (let index = 0; index < contacts.length; index++) {

    // Check if the contact exists
    if (contacts[index].firstName === name) {

      // Check if the property exists
      if (contacts[index][property] !== undefined) {
        return contacts[index][property];
      } else {
        return "No such property";
      }

    }
  }

  // No contact found after checking all contacts
  return "No such contact";
}
console.log(lookUpProfile("Kristian", "lastName")); // Vos
console.log(lookUpProfile("Sherlock", "likes"));    // ["Intriguing Cases", "Violin"]
console.log(lookUpProfile("Bob", "number"));        // No such contact
console.log(lookUpProfile("Akira", "address"));     // No such property