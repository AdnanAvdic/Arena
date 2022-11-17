function myBouncer(arr) {
  var result = arr.filter(Boolean);
  return result;
}

console.log(myBouncer([7, "ate", "", false, 9]));
console.log(myBouncer(["a", "b", "c"]));
console.log(myBouncer([false, null, 0, NaN, undefined, ""]));
console.log(myBouncer([null, 1, 2, undefined]));
module.exports = myBouncer;
