var monitorsListArray = ["Apple", "Peach", "Berry"];

function myMonitorsFunction() {
  var monitorsList = [];
  for (var i = 0; i < monitorsListArray.length; i++) {
    monitorsList.push([monitorsListArray[i], i + 1]);
  }

  return monitorsList;
}

console.log(myMonitorsFunction());
myMonitorsFunction();
module.exports = myMonitorsFunction;
