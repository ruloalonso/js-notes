// Using a factory and create and assign
let car = {
  make : 'default',
  model : 'default',
  year: 2000,
  start: function() {
  console.log(`${this.make} ${this.model} started!`)
  }
}

const bmwFactory = function () {
  return Object.assign(Object.create(car), {
    horn: () => console.log("Meeeec!"),
    make: 'BMW',
    model: 'm5',
    year: 2015
  });
}

const bmwCar = bmwFactory();
bmwCar.start();
bmwCar.horn();

console.log(Object.getPrototypeOf(bmwCar));
console.log(`Properties \"overrided\": ${bmwCar.make} - ${Object.getPrototypeOf(bmwCar).make}`);
console.log(car.isPrototypeOf(bmwCar));

console.log('--------------------------------------');


// Using constructor
function CarConstructor(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

CarConstructor.prototype.start = function() {
  console.log(`${this.make} ${this.model} started!`)
};

function Audi(make, model, year) {
  CarConstructor.call(this, make, model, year);
}

Audi.prototype = new CarConstructor();
Audi.prototype.constructor = Audi;

Audi.prototype.horn = () => console.log("Meeeec!")

const audiCar = new Audi('Audi', 'A5', 2015);
audiCar.start();
audiCar.horn();

console.log(Object.getPrototypeOf(audiCar));
console.log(CarConstructor.prototype.isPrototypeOf(audiCar));