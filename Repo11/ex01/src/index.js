var myArr = [2, 4, 0, 8, 10];

function myArrayFunction(myItems) {
  myItems[2] = 6;

  return console.log(myItems);
}

myArrayFunction(myArr);
module.exports = myArrayFunction;
