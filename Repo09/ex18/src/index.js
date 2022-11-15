function myForLoop1() {
  var evenNumbers = [];
  for (var i = 0; i <= 8; i += 2) {
    evenNumbers.push(i);
  }

  return evenNumbers.toString();
}

function myForLoop2() {
  var evenInverseNumbers = [];
  for (var i = 8; i >= 0; i -= 2) {
    evenInverseNumbers.push(i);
  }

  return evenInverseNumbers.toString();
}

console.log(myForLoop1());
console.log(myForLoop2());
module.exports = { myForLoop1, myForLoop2 };
