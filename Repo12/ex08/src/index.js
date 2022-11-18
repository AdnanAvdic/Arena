var contacts = [
  {
    firstName: "John",
    lastName: "Doe",
    number: "12365495208",
    likes: ["C", "C++", "C#"],
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    number: "4568295761",
    likes: ["Python", "Swift", "R"],
  },
  {
    firstName: "Richard",
    lastName: "Roe",
    number: "6938257149",
    likes: ["React", "Angluar", "Vue"],
  },
  {
    firstName: "Jane",
    lastName: "Roe",
    number: "unknown",
    likes: ["JavaScript", "Node", "HTML & CSS"],
  },
];

function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    const contact = contacts[i];
    if (contact.firstName === name && contact.hasOwnProperty(prop)) {
      return contact[prop];
    } else if (contact.firstName === name && !contact.hasOwnProperty(prop)) {
      return "No such property";
    }
  }
  return "No such contact";
}

console.log(lookUpProfile("John", "likes"));
console.log(lookUpProfile("Jane", "lastName"));
console.log(lookUpProfile("Rob", "number"));
console.log(lookUpProfile("Rob", "JavaScript"));
console.log(lookUpProfile("John", "address"));

module.exports = lookUpProfile;
