class Animal {
  constructor(type, color) {
    this.type  = type;
    this.color = color;
  }
}

const jackson = new Animal('dog', 'brown');

console.log(jackson.type); // dog
console.log(jackson.color); // brown
