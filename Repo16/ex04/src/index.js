class Pets {
  constructor(name, legs) {
    this.name = name;
    this.legs = legs;
  }

  static walk() {
    let numberOfLegs = `${_name} is walking on ${legs} legs`;
    return numberOfLegs;
  }
}

class Dog extends Pets {
  constructor(name, legs) {
    super(name, legs);
  }

  static bark(dogSay) {
    return dogSay + "says WUF-WUF";
  }
}

let dog = new Dog("Pujdo", 4);
console.log(dog.walk());
console.log(dog.bark());

module.exports = {
  Pets,
  Dog,
};
