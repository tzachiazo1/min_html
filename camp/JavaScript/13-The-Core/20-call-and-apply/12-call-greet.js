function greet() {
  return `${this.person} Is An Awesome ${this.role}`;
}

const greeting = {
  person: 'Douglas Crockford',
  role: 'JavaScript Developer'
};

console.log(greet.call(greeting)); // Douglas Crockford Is An Awesome JavaScript Developer
