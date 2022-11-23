const users = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 24,
    gender: "male",
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    age: 5,
    gender: "female",
  },
  {
    firstName: "Jim",
    lastName: "Carrey",
    age: 54,
    gender: "male",
  },
  {
    firstName: "Kate",
    lastName: "Winslet",
    age: 40,
    gender: "female",
  },
];

function getUsers() {
  var output = "";
  for (var i = 0; i < users.length; i++) {
    for (var j = 0; j < users[i].length; j++) {
      output = users[i][j];
    }
  }

  return output;
}

getUsers();
