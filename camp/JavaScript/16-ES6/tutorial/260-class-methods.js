class Animal {
  constructor(type, color) {
    this.type = type;
    this.color = color;
  }

  identify() {
    return `type: ${this.type}, color: ${this.color}`;
  }
}

const jackson = new Animal('dog', 'brown');

console.log(jackson.identify()); // "type: dog, color: brown"
