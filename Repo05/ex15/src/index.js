function main() {
  var myNoun = "dog";
  var myVerb = "ran";
  var myAdjective = "big";
  var myAdverb = "quickly";

  var wordBlanks =
    myNoun + " " + myVerb + " " + myAdjective + " " + myAdverb + ".";

  return wordBlanks;
}

console.log(main());
module.exports = main;
