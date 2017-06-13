/**
 * Use the spread operator to call `getMax` with `scores`
 */
function getMax() {
  return Math.max.apply(null, arguments);
}

function result() {
  const scores = [55, 96, 78, 32];

  // Your code here
}

console.log(result());
// 96
