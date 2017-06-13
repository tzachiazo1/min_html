/**
 * Implement the functions below. Don't forget to write tests.
 * Don't forget to use isArrayEqual to check
 * that two arrays are equal when testing.
 */

/**
 * Pushes a value into the array, at the 'index' place.
 *
 * a = [4, 5, 6]
 * insertValue([4, 5, 6], 0, 999) will change a to [999, 4, 5, 6]
 * a = [4, 5, 6]
 * insertValue([4, 5, 6], 2, 999) will change a to [4, 5, 999, 6]
 * a = [4, 5, 6]
 * insertValue([4, 5, 6], 3, 999) will change a to [4, 5, 6, 999]
 *
 * See why I don't like mutating functions? They are so much clunkier!
 */
function insertValue(array, index, value) {

}

/**
 * Same as above, but returns a new array.
 *
 * insertValue([4, 5, 6], 0, 999) => [999, 4, 5, 6]
 * insertValue([4, 5, 6], 2, 999) => [4, 5, 999, 6]
 * insertValue([4, 5, 6], 3, 999) => [4, 5, 6, 999]
 */
function insertValuePure(array, index, value) {

}

/**
 * Returns whether an array is sorted.
 *
 * isSorted([4, 5, 6]) => true
 * isSorted([4, 7, 3]) => false
 * isSorted([]) => true
 */
function isSorted(array) {

}

/**
 * Returns the cross product of the two vectors.
 * This is defined as vec1[0]*vec1[0] + vec1[1]*vec2[1] + ... vec1[n - 1] * vec2[n - 1]
 *
 * crossProduct([2, 4], [5, 8]) ==> 10 + 32 = 42
 */
function crossProduct(vec1, vec2) {

}

/**
 * Bonus:
 *
 * Returns an array containing only one value from the array
 *
 * unique([4, 5, 1]) ==> [4, 5, 1]
 * unique([4, 5, 5, 4, 1, 5]) ==> [4, 5, 1]
 * unique([]) ==> []
 */
function unique(array) {

}

/**
 * Bonus:
 *
 * Returns true if the two arrays have the same members.
 *
 * sameMembers([1, 2, 3], [3, 1, 2]) ==> true
 * sameMembers([1, 2, 3, 4], [3, 1, 2]) ==> false
 * sameMembers([1, 2, 3, 4], [3, 1, 2]) ==> false
 * sameMembers([1, 2, 3, 3], [3, 1, 2, 3]) ==> true
 * sameMembers([1, 2, 3, 3], [3, 1, 2]) ==> false
 * sameMembers([], []) ==> true
 */
function sameMembers(array1, array2) {

}

/**
 * Bonus:
 *
 * returns a sorted array that is the merge of two other sorted arrays.
 *
 * mergeSorted([1, 5, 7], [2, 3, 6, 7, 8]) ==> [1, 2, 3, 5, 6, 7, 7, 8]
 */
function mergeSorted(array1, array2) {

}
