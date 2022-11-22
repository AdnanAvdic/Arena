function firstName(firstName) {
  return firstName.toUpperCase();
}

function lastName(lastName) {
  var lastNameToLowerCase = lastName.toLowerCase();
  return lastNameToLowerCase;
}

console.log(firstName("adnan"));
console.log(lastName("AVDIC"));

exports.firstName = firstName;
exports.lastName = lastName;
