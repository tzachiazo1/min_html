function add() {
  return this + 3;
}

const num = 47;

/**
 * The 'this' context can be anything, though usually an Object
 */
const res = add.call(num);

console.log(res); // 47 + 3 = 50
