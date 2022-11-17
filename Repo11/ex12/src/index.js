function splitArrayInGroups(arr, n) {
  var result = [];
  result.push(arr);

  for (var i = 0; i < result.length; i++) {
    for (var j = 0; j < result[i].length; j++) {
      result[i][j].split("", n);
    }
  }

  return result;
}

console.log(splitArrayInGroups(["a", "b", "c", "d"], 2));
