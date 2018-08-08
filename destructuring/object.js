let make, model;
let car = {
  make: 'BMW',
  model: 'm3',
  year: 2015,
  turbo: true
};

({ make, model } = car);

console.log(make);
console.log(model);