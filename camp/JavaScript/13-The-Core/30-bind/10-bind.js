function getName() {
  return this.name;
}

const context = {
  name: 'John Doe'
};

/**
 * `bind` returns a new Function with a specific context for `this`
 * Useful for setting the `this` context but executing the function later in time
 */
const getNameBound = getName.bind(context);

console.log(getNameBound()); // John Doe
