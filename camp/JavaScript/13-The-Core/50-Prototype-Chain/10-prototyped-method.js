function User(name) {
  this.name = name;
}

/**
 * Prototype properties affect all objects of the same constructor
 */
User.prototype.sayHi = function () {
  return 'Howdy!';
};

const john  = new User('John');
const peter = new User('Peter');

// The method exists and we can execute it
console.log(john.sayHi());
// Howdy!
console.log(peter.sayHi());
// Howdy!
