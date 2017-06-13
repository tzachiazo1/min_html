function User(name) {
  this.name = name;
}

const john  = new User('John');
const peter = new User('Peter');

/**
 * We can add stuff to the `prototype` even after the objects were created
 */
User.prototype.getName = function () {
  return this.name;
};

console.log(john.getName());
console.log(john.counter);
// John
console.log(peter.getName());
// Peter
