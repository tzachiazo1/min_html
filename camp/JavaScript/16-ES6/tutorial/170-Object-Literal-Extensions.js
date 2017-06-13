const a = 5, b = 10;

const obj = {
  a,
  b,
  getSum() {
    return this.a + this.b;
  },
  ['you' + a]: 100
};

console.log(a, b, obj.getSum(), obj.you5); // 5, 10, 15, 100
