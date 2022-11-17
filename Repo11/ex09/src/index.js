function myMutation(arr) {
  var count = 0;
  var firstElement = arr[0].toLowerCase().split("");
  var secondElement = arr[1].toLowerCase().split("");
  for (var i = 0; i < secondElement.length; i++) {
    if (firstElement.indexOf(secondElement[i]) > -1) {
      count++;
    }
  }

  if (count == secondElement.length) {
    return true;
  } else {
    return false;
  }
}
console.log(myMutation(["hello", "hey"]));
console.log(myMutation(["hello", "Hello"]));
console.log(myMutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(myMutation(["Mary", "Army"]));
console.log(myMutation(["Mary", "Aarmy"]));
console.log(myMutation(["Alien", "line"]));
console.log(myMutation(["floor", "for"]));
console.log(myMutation(["hello", "neo"]));
console.log(myMutation(["voodoo", "no"]));
console.log(myMutation(["ate", "date"]));
console.log(myMutation(["Tiger", "Zebra"]));
console.log(myMutation(["Noel", "Ole"]));
module.exports = myMutation;
