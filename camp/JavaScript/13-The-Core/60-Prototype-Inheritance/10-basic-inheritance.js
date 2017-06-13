function Person() { }

function Ninja() { }

// Only this maintains the prototype chain
Ninja.prototype = new Person();

const ninja = new Ninja();

console.log(ninja instanceof Ninja); // true
console.log(ninja instanceof Person); // true
console.log(ninja instanceof Object); // true
