/**
 * Object destructuring helps us create variables with values from keys
 * from the specified Object at the right of the `=` sign
 *
 * Note:
 * The key names and the variable names must match
 */
const person = {
  firstName: 'John',
  lastName: 'Doe'
};

const { firstName, lastName } = person;

console.log(firstName); // John
console.log(lastName); // Doe
