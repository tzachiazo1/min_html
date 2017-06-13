function getFullName(person) {
  const { firstName, lastName } = person;

  // The same as...
  // const firstName = person.firstName;
  // const lastName = person.lastName;

  return `${firstName} ${lastName}`;
}

const person = {
  firstName: 'John',
  lastName: 'Doe'
};

console.log(getFullName(person));
// John Doe
