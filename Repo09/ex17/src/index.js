function inverseWhile() {
  var fiveNumbers = [];
  var i = 5;

  while (i >= 0) {
    fiveNumbers.push(i);
    i--;
  }

  return fiveNumbers.toString();
}

console.log(inverseWhile());
module.exports = inverseWhile;
