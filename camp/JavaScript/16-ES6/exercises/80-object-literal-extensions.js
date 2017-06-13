/**
 * Finalize the createCar function so that the test below doesn't fail.
 * It should use the new ES6 Object extensions, i.e.:
 * 1. Don't use `:` when defining keys
 */

function createCar(brand, numberOfWheels) {
  return {
    // Your code here
  };
}

const car = createCar('bmw', 4);

if (car.brand !== 'bmw') {
  throw 'failed';
}

if (car.numberOfWheels !== 4) {
  throw 'failed';
}
