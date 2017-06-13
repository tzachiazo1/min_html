function User(name) {
  this.name = name;

  this.getName = function () {
    return 'Boooya! Not what you expected.';
  };
}

User.prototype.getName = function () {
  return this.name;
};

const john = new User('John');

// Calling the instance method, not the `prototype` method
console.log(john.getName());
// Boooya! Not what you expected
