// let ready;

// // var identity = function (num1, num2) {
// //   return num1 + num2
// // };

// // let identity = function(a) {
// //   return function(b) {
// //     return a + b;
// //   }
// // }

// let delayInvoc = function(arg) {
//   var add = (prev) => (curr) => curr ? add(prev + curr) : prev
//   return add(0)(arg)
// }

// let total = 0;

// let delayInvoc = function (a) {
//   if (a === undefined) {
//     var result = total;
//     total = null;
//     return result;
//   } else {
//     total = total + a;
//     return delayInvoc;
//   }
// };


// Write a function which will accept a method, an object, and additional
// parameters. Then invoke the method on the object, passing the parameters.

// Suppose we have a method:

//     var update = function(name, age, tShirtSize) {
//       this.name = name;
//       this.age = age;
//       this.tShirtSize = tShirtSize;
//     };

// and a person object:

//     var person = { name: 'Kishor', age: 28, tShirtSize: 'L' };

// You need to provide the implementation for the method:

//     var caller = function (person,
//                            update,
//                            name,         //'Sharma'
//                            age,          // 29
//                            tShirtSize) { // 'XL'
//       // your code here
//     };

//     console.log(person)



// module.exports = delayInvoc;
// module.exports = identity;
