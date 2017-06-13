const pet = {};

pet.type = 'dog'; // this is OK

pet = { type: 'dog' }; // throws an error
