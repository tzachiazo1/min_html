function toArray() {
  return Array.from(arguments);
}

const arr = toArray(1, 2, 3);

console.log(arr); // [1, 2, 3]
