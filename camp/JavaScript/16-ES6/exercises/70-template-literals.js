/**
 * Rewrite the console.log to use template literals
 */
const a = 4;
const b = 7;

console.log(a + ' * ' + b + ' = ' + (a * b));

/**
 * Use destructuring to make the code not use indexes
 * Rewrite the return value to use template literals.
 *
 */
function greetMale(name) {
  const nameParts = name.split(' ');

  return 'Hello, Mr. ' + nameParts[1] + ', ' + nameParts[0];
}


console.log(greetMale('President Trump'));
