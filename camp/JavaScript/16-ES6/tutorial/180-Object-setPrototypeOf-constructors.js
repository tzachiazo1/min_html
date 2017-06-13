function Ninja() {
  // Nothing here
}

Ninja.prototype.kill = function () {
  return 'I Killed: ' + this.firstName + ' ' + this.lastName;
};

//-----------------------------------------------------

function Person(first, last, age) {
  this.firstName = first;
  this.lastName  = last;
  this.age       = age;
}

Person.prototype.getAge = function () {
  return this.age;
};

/**
 * Connects `Person.prototype` to `Ninja.prototype` internally
 */
Object.setPrototypeOf(Person.prototype, Ninja.prototype);

//-----------------------------------------------------

const john = new Person('Peter', 'Pan', 7);

console.log(john.getAge()); // 7
console.log(john.kill());   // I killed: Peter Pan
