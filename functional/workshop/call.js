// var notDuck = Object.create({quack: true})
// var duck = {quack: true}
// // duckCount(duck, notDuck) // 1

// console.log(notDuck.hasOwnProperty('quack'));
// console.log(duck.hasOwnProperty('quack'));

// function reduce(arr, duckCount, initial) {
//   return (function reduceOne(index, value) {
//     if (index >= arr.length - 1) return value // end condition
//     return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
//   })(0, initial) // IIFE. kick off recursion with initial values
// }

// function test() {
//   let args = Array.prototype.slice.call(arguments);
//   console.log(args);
// }

// test('hey', 'yo');

function duckCount() {
  return Array.prototype.slice.call(arguments)
    .filter(obj => Object.prototype.hasOwnProperty.call(obj, 'quack'))
    .length;
}

module.exports = duckCount;
