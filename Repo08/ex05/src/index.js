var sum = 0;

function addThree() {
  sum += 3;
  console.log(sum);
}
function addFive() {
  sum += 5;
  console.log(sum);
}

addThree();
addFive();
module.exports = { addThree, addFive };
