/* var foo = 1;

function bar() {
  var foo;
  console.log(foo);
	if (!foo) {
		foo = 10;
	}
	console.log(foo);
}

bar(); */

function test() {
	// foo(); // TypeError "foo is not a function"
	bar(); // "this will run!"
	var foo = function () { // function expression assigned to local variable 'foo'
		alert("this won't run!");
	}
	function bar() { // function declaration, given the name 'bar'
		console.log("this will run!");
	}
}
test();

// con let, esto no funcionaría!!!