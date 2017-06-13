function greet(offer) {
  return `Hello ${this.name}, would you like some ${offer}?`;
}

const john = {
  name: 'John Doe'
};

const peter = {
  name: 'Peter Pan'
};

console.log(greet.call(john, 'coffee')); // Hello John Doe, would you like some coffee?
console.log(greet.call(peter, 'tea')); // Hello Peter Pan, would you like some tea?
