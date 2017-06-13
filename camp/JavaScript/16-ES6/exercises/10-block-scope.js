/**
 * Fix the code below
 * Don't use `var`
 */
function sayHi(message) {
  if (message) {
    let result = message;
  }
  else {
    let result = 'Howdy';
  }

  return result + ', stranger.';
}

console.log(sayHi());
// Howdy, stranger.
console.log(sayHi('Hello'));
// Hello, stranger.
