const person = {
  firstName: 'Peter'
};
const john = {
  lastName: 'Pan'
};

Object.setPrototypeOf(john, person);

console.log(john.firstName); // Peter
