function myNes() {
  var gloveBoxContents = "";
  var myStorage = {
    car: {
      inside: {
        "glove box": "maps",
        "passenger seat": "crumbs",
      },
      outside: {
        trunk: "jack",
      },
    },
  };

  gloveBoxContents = myStorage.car.inside["glove box"];
  return gloveBoxContents;
}

console.log(myNes());
module.exports = myNes;
