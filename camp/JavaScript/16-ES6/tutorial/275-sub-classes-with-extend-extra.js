class Animal {
  constructor(type, color) {
    this.type  = type;
    this.color = color;
  }

  identify() {
    return `type: ${this.type}, color: ${this.color}`;
  }
}

class Dog extends Animal {
  constructor(type, color, name) {
    // using "this" here will throw an error
    super(type, color); // pass parameters to parent constructor and allow using “this”
    this.name = name;   // "this" is allowed here
  }

  identify() {
    // "super" is used to access "identify" function on the object's parent
    return `${super.identify()}, name: ${this.name}`;
  }
}

const clifford = new Dog('Lavrador', 'white', 'Clifford');

console.log(clifford.identify()); // "type: Lavrador, color: white, name: Clifford"
