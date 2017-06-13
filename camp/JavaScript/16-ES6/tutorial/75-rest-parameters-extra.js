/**
 * `args` will now be an Array that holds the "rest" of the arguments that were passed
 */
function calc(text, ...args) {
  let sum = 0;

  args.forEach((value) => {
    sum += value;
  });

  return `${text}: ${sum}`;
}

console.log(calc('the sum is', 3, 5, 6));
// "the sum is: 14"
