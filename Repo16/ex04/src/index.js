class Pets {
  constructor(_name, _legs) {
    this.name = _name;
    this.legs = _legs;
  }

  walk() {
    let numberOfLegs = this.legs;
    return `${this.name} is walking on ${numberOfLegs} legs`;
  }
}

class Dog extends Pets {
  constructor(_name, _legs) {
    super(_name, _legs);
  }

  bark() {
    let dogSay = `${this.name} says WUF-WUF`;
    return dogSay;
  }
}

let dog = new Dog("Pujdo", 4);
console.log(dog.walk());
console.log(dog.bark());

module.exports = {
  Pets,
  Dog,
};
