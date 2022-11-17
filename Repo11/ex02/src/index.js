var myStr = "Paragon is the best!";

function useMethods(str) {
  var mySplit = str.split("");
  var myReversed = mySplit.reverse();
  var myReverse = myReversed.join("");

  var countCharacters = myReverse.split(" ").map((x) => x.length);

  return console.log({ myReverse, countCharacters });
}

useMethods(myStr);
module.exports = useMethods;
