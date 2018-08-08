// # Task

// Write a function that allows you to use Array.prototype.slice without using slice.call or slice.apply to invoke it.

// Normally you have to use slice with call or apply:

//     var slice = Array.prototype.slice
    
//     function() {
//       var args = slice.call(arguments) // this works
//     }

// We want this to work:

//     var slice = yourFunction
    
//     function() {
//       var args = slice(arguments) // this works
//     }


// Solution Explained

// The value of `this` in Function.call is the function
// that will be executed.
//
// Bind returns a new function with the value of `this` fixed
// to whatever was passed as its first argument.
//
// Every function 'inherits' from Function.prototype,
// thus every function, including call, apply and bind 
// have the methods call apply and bind.
//
// Function.prototype.call === Function.call

module.exports = Function.call.bind(Array.prototype.slice)