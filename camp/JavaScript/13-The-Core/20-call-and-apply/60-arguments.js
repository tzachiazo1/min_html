/**
 * `arguments` is a special keyword inside functions that gives us an Array-like Object
 * that hold all of the arguments that were passed to the function during execution
 */
function getArgs() {
  return arguments;
}

const args = getArgs(1, 'Hello', {}, []);

console.log(args); // { '0': 1, '1': 'Hello', '2': {}, '3': [] }

console.log(args.forEach); // undefined - not an array!
