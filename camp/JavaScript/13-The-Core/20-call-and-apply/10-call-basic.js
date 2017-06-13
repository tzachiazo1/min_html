function add() {
  return this.a + this.b;
}

const obj = {
  a: 1,
  b: 3
};

/**
 * Execute the function with a specific context for 'this'
 */
const res = add.call(obj);

console.log(res); // 1 + 3 = 4
