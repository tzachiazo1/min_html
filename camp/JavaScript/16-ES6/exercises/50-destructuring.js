/**
 * Update `sayHi` to make use of Object Destructuring
 */
function sayHi(data) {
  const name = data.name;
  const age  = data.age;

  return `${name} is ${age} years old`
}

console.log(sayHi({
  name: 'Peter Pan',
  age: 7
}));
// Peter Pan is 7 years old
