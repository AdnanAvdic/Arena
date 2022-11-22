class Person {
  static display() {
    let message = "Static method is invoked from Person class";
    console.log(message);
    return message;
  }
  static show() {
    display();
  }
}

var message = new Person();
message.show();
module.exports = Person;
