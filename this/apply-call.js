// CALL TO BORROW


// var avgScore = "global avgScore";

// //global function
// function avg (arrayOfScores) {
//     // Add all the scores and return the total
//     var sumOfScores = arrayOfScores.reduce((prev, cur) => prev + cur);

//     // The "this" keyword here will be bound to the global object, unless we set the "this" with Call or Apply
//     this.avgScore = sumOfScores / arrayOfScores.length;
// }

// var gameController = {
//     scores: [20, 34, 55, 46, 77],
//     avgScore: null
// }

// // If we execute the avg function thus, "this" inside the function is bound to the global window object:
// avg(gameController.scores);
// // Proof that the avgScore was set on the global window object
// console.log (window.avgScore); // 46.4
// console.log (gameController.avgScore); // null

// // reset the global avgScore
// avgScore = "global avgScore";

// // To set the "this" value explicitly, so that "this" is bound to the gameController,
// // We use the call () method:
// avg.call(gameController, gameController.scores);

// console.log (window.avgScore); //global avgScore
// console.log (gameController.avgScore); // 46.4


//
// APPLY TO BORROW
//


// var clientData = {
//   id: 094545,
//   fullName: "Not Set",
//   setUserName: function (firstName, lastName)  {
//     this.fullName = firstName + " " + lastName;
//   }
// }

// function getUserInput (firstName, lastName, callback, callbackObj) {
//   // The use of the Apply method below will set the "this" value to callbackObj
//   callback.apply (callbackObj, [firstName, lastName]);
// }

// // The clientData object will be used by the Apply method to set the "this" value
// getUserInput ("Barack", "Obama", clientData.setUserName, clientData);
// // the fullName property on the clientData was correctly set
// console.log (clientData.fullName); // Barack Obama


//
// ARRAY-LIKE BORROW
//


// // An array-like object: note the non-negative integers used as keys
// var anArrayLikeObj = {0: "Martin", 1: 78, 2: 67, 3: ["Letta", "Marieta", "Pauline"], length: 4 };

// // Make a quick copy and save the results in a real array:
// // First parameter sets the "this" value
// var newArray = Array.prototype.slice.call(anArrayLikeObj, 0);

// console.log(newArray); // ["Martin", 78, 67, Array[3]]

// // Search for "Martin" in the array-like object
// console.log(Array.prototype.indexOf.call(anArrayLikeObj, "Martin") === -1 ? false : true); // true

// // Try using an Array method without the call () or apply ()
// // console.log(anArrayLikeObj.indexOf("Martin") === -1 ? false : true); // Error: Object has no method 'indexOf'

// // Reverse the object:
// console.log(Array.prototype.reverse.call(anArrayLikeObj));
// // {0: Array[3], 1: 67, 2: 78, 3: "Martin", length: 4}

// // Sweet. We can pop too:
// console.log(Array.prototype.pop.call(anArrayLikeObj));
// console.log(anArrayLikeObj); // {0: Array[3], 1: 67, 2: 78, length: 3}

// // What about push?
// console.log(Array.prototype.push.call(anArrayLikeObj, "Jackie"));
// console.log(anArrayLikeObj); // {0: Array[3], 1: 67, 2: 78, 3: "Jackie", length: 4}


//
// ARGUMENTS
//


function transitionTo (name) {
  // Because the arguments object is an array-like object
  // We can use the slice () Array method on it
  // The number "1" parameter means: return a copy of the array from index 1 to the end. Or simply: skip the first item

  var args = Array.prototype.slice.call(arguments);

  // I added this bit so we can see the args value
  console.log(arguments);
  console.log(args);

  // I commented out this last line because it is beyond this example
  //doTransition(this, name, this.updateURL, args);
}

// Because the slice method copied from index 1 to the end, the first item "contact" was not returned
transitionTo ("contact", "Today", "20"); // ["Today", "20"]

// We do not define the function with any parameters, yet we can get all the arguments passed to it
function doSomething () {
  var args = Array.prototype.slice.call (arguments);
  console.log (args);
}

doSomething ("Water", "Salt", "Glue"); // ["Water", "Salt", "Glue"]


//
// MORE BORROWING WITH APPLY
//


var gameController = {
  scores  :[20, 34, 55, 46, 77],
  avgScore:null,
  players :[
      {name:"Tommy", playerID:987, age:23},
      {name:"Pau", playerID:87, age:33}
  ]
}

var appController = {
  scores  :[900, 845, 809, 950],
  avgScore:null,
  avg     :function () {

      var sumOfScores = this.scores.reduce (function (prev, cur, index, array) {
          return prev + cur;
      });

      this.avgScore = sumOfScores / this.scores.length;
  }
}

// Note that we are using the apply () method, so the 2nd argument has to be an array
appController.avg.apply(gameController);
console.log (gameController.avgScore); // 46.4

// appController.avgScore is still null; it was not updated, only gameController.avgScore was updated
console.log (appController.avgScore); // null

appController.maxNum = function () {
  this.avgScore = Math.max.apply (null, this.scores);
}

appController.maxNum.apply(gameController, gameController.scores);
console.log (gameController.avgScore); // 77


//
// VARIADIC FUNCTIONS
//


// Using the apply () method, we can pass the array of numbers:
var allNumbers = [23, 11, 34, 56];
console.log (Math.max.apply (null, allNumbers)); // 56

var students = ["Peter Alexander", "Michael Woodruff", "Judy Archer", "Malcolm Khan"];

// No specific parameters defined, because ANY number of parameters are accepted
function welcomeStudents () {
    var args = Array.prototype.slice.call(arguments);

    var lastItem = args.pop ();
    console.log ("Welcome " + args.join (", ") + ", and " + lastItem + ".");
}

welcomeStudents.apply (null, students);
// Welcome Peter Alexander, Michael Woodruff, Judy Archer, and Malcolm Khan.