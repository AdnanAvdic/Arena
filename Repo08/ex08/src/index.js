var total = 0;

function funcWithArg(digit) {
  return (total = (digit + 9) / 5);
}

console.log(funcWithArg(6));
module.exports = funcWithArg;
