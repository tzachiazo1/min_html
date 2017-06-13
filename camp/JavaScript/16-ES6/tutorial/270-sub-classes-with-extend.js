class Animal {
  constructor(type, color) {
    this.type  = type;
    this.color = color;
  }

  getType() {
    return this.type;
  }
}

class Dog extends Animal {
  constructor(type, color, name) {
    super(type, color);

    this.name = name;
  }

  getColor() {
    return this.color;
  }
}

const clifford = new Dog('Lavrador', 'white', 'Clifford');

console.info(clifford.name);
// Clifford
console.info(clifford.getColor());
// white
console.info(clifford.getType());
// Lavrador
