let pattern = /xyz/;
let myString = 'This is xyz a test';

console.log(pattern.test(myString));
console.log(myString.replace(pattern, 'just'));
console.log(myString);
console.log(myString.match(pattern));
