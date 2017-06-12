function Ninja() {
  this.swung = false;
}

const ninjaA = new Ninja();
const ninjaB = new Ninja();

Ninja.prototype.swing = function() {
  this.swung = true;

  return this;
};

console.log(ninjaA.swing().swung); // expected to be "true"
console.log(ninjaB.swing().swung); // expected to be "true"


// Verify that the swing method exists and returns an instance.
// and that it works on all Ninja instances.
