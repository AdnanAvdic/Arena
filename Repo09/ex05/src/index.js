function myStrictValues(m) {
  if (m != 55) {
    return "Not equal";
  }
  return "Equal";
}

console.log(myStrictValues(55));
console.log(myStrictValues("55"));
console.log(myStrictValues("21"));
console.log(myStrictValues(12));
console.log(myStrictValues("Doe"));
module.exports = myStrictValues;
