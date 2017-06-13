// const str = 'text';
// The same as...
const str = new String('text');
console.log(str.constructor === String);      // true

console.log(String);

// const obj = {};
// The same as...
const obj = new Object();

console.log(obj.constructor === Object);      // true

// const arr = [];
// The same as...
const arr = new Array();

console.log(arr.constructor === Array);       // true
