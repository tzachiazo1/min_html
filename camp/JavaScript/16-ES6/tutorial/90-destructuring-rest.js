/**
 * We can the rest of the values using the "rest" operator
 */
let [a, b, ...rest] = [1, 2, 3, 4, 5];

console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3, 4, 5]
