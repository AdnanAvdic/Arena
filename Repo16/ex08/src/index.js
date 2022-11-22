class Person {
  constructor(_name, _email, _age) {
    this.name = _name;
    this.age = _age;
    this.email = _email;
  }

  getPerson() {
    let personInfo = `Name ${this.name}, email ${this.email}, age ${this.age} `;
    return personInfo;
  }
}

module.exports = Person;
