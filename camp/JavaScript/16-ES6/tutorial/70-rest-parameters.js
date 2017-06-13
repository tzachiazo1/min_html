/**
 * The rest operator takes the passed arguments and build an Array from them
 */
function sum(...args) {
  let sum = 0;

  args.forEach((value) => {
    sum += value;
  });

  return sum;
}

console.log(sum(3, 5, 6));
// 14
