const arr = [1, 2, 3];

for (const item of arr) {
  if (item > 2) {
    break;
  }

  console.log(item); // 1 2
}
