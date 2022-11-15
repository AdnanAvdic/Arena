function myDoWhile() {
  var myNumbers = [];
  var i = 0;

  do {
    myNumbers.push(i);
    i++;
  } while (i < 10);

  return myNumbers.toString();
}

console.log(myDoWhile());

module.exports = myDoWhile;
