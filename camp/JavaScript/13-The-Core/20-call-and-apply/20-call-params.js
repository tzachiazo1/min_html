function add(c, d) {
  return this.a + this.b + c + d;
}

const obj = {
  a: 1,
  b: 3
};

/**
 * Parameters are passed after the context, separated by a comma
 */
const res = add.call(obj, 5, 7);

console.log(res); // 1 + 3 + 5 + 7 = 16
