// Esto peta
/* function myFunction() {
  console.log(a);
  console.log('Hi');
}

myFunction(); */

function myFunction2() {
  try {
    console.log(a);
  } catch (error) {
    console.error(error.message);
  }

  console.log('Hi');
}

myFunction2();

console.log('--------')

// Custom exceptions
function fooFunction(arg) {
  if (arg !== 1) {
    throw new Error('Arg is not a 1');
  } else {
    console.log('No errors');
  }
}

function fooFunction2() {
  try {
    fooFunction(1);
  } catch (error) {
    console.error(error.message);
  }
}

fooFunction2();