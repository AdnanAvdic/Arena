const milili = [10, 25, 4];

function myArr(mili) {
  "use strict";

  milili[0] = mili[0];
  milili[1] = mili[1];
  milili[2] = mili[2];

  console.log(milili);
  return milili;
}

myArr([4, 10, 25]);
module.exports = myArr;
