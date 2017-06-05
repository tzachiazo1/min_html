// An array-like object: note the non-negative integers used as keys​
const anArrayLikeObj = {
  0: 'Martin',
  1: 78,
  2: 67,
  3: ['Letta', 'Marieta', 'Pauline'],
  length: 4
};

// Fix this using Array.prototype and call
function getIndex(search) {

  return Array.prototype.indexOf.call(anArrayLikeObj, search);

}

console.log(getIndex('Martin'));

