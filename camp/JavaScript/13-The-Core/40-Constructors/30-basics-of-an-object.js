function Ninja() {

}

const ninja = new Ninja();

// However the type of the instance is still an object.
console.log(typeof ninja); // object

// The object was instantiated properly.
console.log(ninja instanceof Ninja); // true

// The ninja object was created by the Ninja function.
console.log(ninja.constructor === Ninja); // true
