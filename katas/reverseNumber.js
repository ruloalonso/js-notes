// Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

// Examples
//  123 ->  321
// -456 -> -654
// 1000 ->    1

// my solution

function reverseNumber(n) {
  let array = String(n).split('');
  if (n < 0) array.shift();
  array = Number(array.reverse().join(''));
  if (n < 0) array *= -1;
  return array;
}

// best solution

function reverseNumber(n) {
  let isNegative = n < 0;  
  let reverseAsString = Math.abs(n).toString().split('').reverse().join('');
  let result = Number(reverseAsString);
  
  return isNegative ? -result : result;
}