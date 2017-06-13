/**
 * The rest operator in Object Destructuring is not yet implemented
 */
const data = {
  name: 'John Doe',
  age: 47,
  address: 'Middle of Nowhere'
};

const { name, ...rest } = data;

console.log(name); // John Doe
console.log(rest); // { age: 47, address: 'Middle of Nowhere' }
console.log(rest.age); // 47
