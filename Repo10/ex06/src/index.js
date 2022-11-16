var lion = {
  name: "Simba",
  legs: 4,
  tails: 1,
};

function myFunction(roar, roarroar) {
  lion[roar] = roarroar;
  return lion;
}

console.log(myFunction("sound", "roar-roar"));
module.exports = myFunction;
