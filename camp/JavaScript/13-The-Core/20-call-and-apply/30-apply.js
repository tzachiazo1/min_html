function add(c, d) {
  return this.a + this.b + c + d;
}

const obj = {
  a: 1,
  b: 3
};

/**
 * Same thing as `call`, but...
 * Parameters are passed after the context as an Array
 */
console.log(add.apply(obj, [10, 20])); // 1 + 3 + 10 + 20 = 34
