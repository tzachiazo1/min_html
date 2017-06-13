for (var i = 0; i < 10; i++) {
  console.log(i); // logs 0-9
}
for (let j = 0; j < 10; j++) {
  console.log(j); // logs 0-9
}

console.log(i); // 10
console.log(j); // ReferenceError: j is not defined
