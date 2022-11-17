function myBouncer(arr) {
  var result = arr.filter(Boolean);
  return result;
}

console.log(myBouncer([7, "ate", "", false, 9]));
