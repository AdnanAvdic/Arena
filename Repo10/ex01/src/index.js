var myPet = {
  species: "Labrador",
  name: "Bobi",
  legs: 4,
  friends: ["Robi", "Cobi"],
};

function myFunction(myObj) {
  return myObj;
}

console.log(myFunction(myPet, myFunction));
module.exports = myFunction;
