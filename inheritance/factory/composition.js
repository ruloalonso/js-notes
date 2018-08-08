const gpsComponent = () => ({
  showLocation: (location) => console.log(`I'm at ${location}!`)
});

const politeComponent = (state) => ({
  greet: (greeting) => console.log(`${greeting}!`),
  presentation: () => console.log(`Hi! I'm a ${state.year} ${state.make} ${state.model}`)
});

const renaultFactory = (options) => {
  let state = {
    make: 'Renault',
    model: 'clio',
    year: 2010 
  }

  return Object.assign(state, politeComponent(state), options);
};

const bmwFactory = (options) => {
  let state = {
    make: 'BMW',
    model: 'm5',
    year: 2015
  }

  return Object.assign(state, politeComponent(state), gpsComponent(), options);
};

let myRenault = renaultFactory({ radio: () => console.log('Renault has radio!')})
myRenault.greet('How u doin?');
myRenault.presentation();
myRenault.radio();

console.log('--------------');

let myBmw = bmwFactory();
myBmw.greet('What\'s up?');
myBmw.presentation();
myBmw.showLocation('Madrid');