function logicalOperator(num) {
  if (num < 20 || num > 30) {
    return "Out";
  }
  return "In";
}

console.log(logicalOperator(0));
console.log(logicalOperator(9));
console.log(logicalOperator(20));
console.log(logicalOperator(23));
console.log(logicalOperator(30));
console.log(logicalOperator(31));
console.log(logicalOperator(100));
module.exports = logicalOperator;
