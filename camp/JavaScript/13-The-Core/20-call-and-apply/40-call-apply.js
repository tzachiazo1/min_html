function theFunction(name, profession) {
  console.log(`My name is ${name} and I am a ${profession}.`);
}

theFunction('John', 'fireman');
theFunction.call(null, 'Claude', 'mathematician');
theFunction.apply(null, ['Susan', 'school teacher']);
