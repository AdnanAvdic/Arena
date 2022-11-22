class Person {
  display() {
    var message = "Static method is invoked from Person class";
    console.log(message);
    return message;
  }

  show() {
    this.display();
  }
}

var message = new Person();
message.show();
module.exports = Person;
