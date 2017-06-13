function greet(prefix) {
  return prefix + ' ' + this.name;
}

const context = {
  name: 'John Doe'
};

const getNameBound = greet.bind(context, 'Howdy!');

console.log(getNameBound()); // Howdy! John Doe
