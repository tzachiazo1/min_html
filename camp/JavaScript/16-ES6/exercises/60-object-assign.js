/**
 * Fix the Object.assign below, it should:
 * 1. Copy the object o1 to o2.
 * 2. Make o2's b be 7
 */
const o1 = {
  a: 4,
  b: 6
};

// Update this line only
const o2 = Object.assign(o1);

o1.a = 5;

console.log(o1.a);
// 5
console.log(o2.a);
// 4
console.log(o2.b);
// 7
