/**
 * The `Math.max()` method is an example of a common
 * variable-arity function in JavaScript:
 */

// We can pass any number of arguments to the `Math.max()` method
console.log(Math.max(65, 71, 54, 96)); // 96

const scores = [65, 71, 54, 96];

// We cannot pass an Array of numbers to the the `Math.max` method like this
console.log(Math.max(scores)); // NaN

// Using the `apply()` method, we can pass an Array of numbers:
console.log(Math.max.apply(null, scores)); // 96
