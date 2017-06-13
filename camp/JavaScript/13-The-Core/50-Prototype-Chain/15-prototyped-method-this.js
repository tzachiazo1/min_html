function User(name) {
  this.name = name;
}

User.prototype.getName = function () {
  return this.name;
};

const john  = new User('John');
const peter = new User('Peter');

console.log(john.getName());
// John
console.log(peter.getName());
// Peter
