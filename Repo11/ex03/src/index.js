var myPetsArray = ["Dog", "Cat"];

function myArrayFunction(myPets) {
  var myNewPets = myPets;
  myNewPets.push("Bird", "Fish");

  var firstPet = myNewPets.shift();
  var lastPet = myNewPets.pop();
  myNewPets.unshift("Lion");

  return console.log(myNewPets);
}

myArrayFunction(myPetsArray);
module.exports = myArrayFunction;
