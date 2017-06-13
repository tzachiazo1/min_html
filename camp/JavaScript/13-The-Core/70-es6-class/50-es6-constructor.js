// ES6
class Person {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name + ' Doe';
  }
}

const me = new Person('John');

console.log(me.getName()); // John Doe
