const p1 = new Point(5, 8); // ReferenceError: Point is not defined

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

console.log(p1);
