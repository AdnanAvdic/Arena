function myForLoop1() {
  var evenNumbers = "";
  for (var i = 0; i <= 8; i += 2) {
    evenNumbers += i;
  }

  return console.log(evenNumbers);
}

function myForLoop2() {
  var evenInverseNumbers = "";
  for (var i = 8; i >= 0; i -= 2) {
    evenInverseNumbers += i;
  }

  return console.log(evenInverseNumbers);
}

myForLoop1();
myForLoop2();
module.exports = { myForLoop1, myForLoop2 };
