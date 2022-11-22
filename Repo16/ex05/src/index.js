class Microsoft {
  constructor(name) {
    this.name = name;
  }

  occupation() {
    return console.log(`${this.name} is a philantropist!`);
  }
}

class Facebook extends Microsoft {
  constructor(name, age) {
    super(name, age);
    this.age = age;
  }

  studentAge(name, age) {
    return console.log(`${name} is ${age}`);
  }
}

var henry = new Microsoft("Wiliam");
var elliot = new Facebook("Mark Elliot Zuckerberg", 23);
henry.occupation();
elliot.occupation();
elliot.studentAge();
