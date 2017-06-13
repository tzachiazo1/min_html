function Ninja() {

}

const ninjaA = Ninja();

console.log(ninjaA, 'Is undefined, not an instance of Ninja.');

const ninjaB = new Ninja();

console.log(ninjaB, 'Is defined, instance of Ninja.');
