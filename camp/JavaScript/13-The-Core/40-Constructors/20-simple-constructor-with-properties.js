function User(name) {
  this.name = name;

  this.getName = function () {
    return this.name;
  };
}

const john = new User('John Doe');

console.log(john);           // {name: 'John Doe', getName: Function }
console.log(john.getName()); // John Doe
