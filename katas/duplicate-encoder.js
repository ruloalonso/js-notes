//https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

// The goal of this exercise is to convert a string to a new string where each character in the new string is '(' if that 
// character appears only once in the original string, or ')' if that character appears more than once in the original string. 
// Ignore capitalization when determining if a character is a duplicate.

// Examples:

// "din" => "((("

// "recede" => "()()()"

// "Success" => ")())())"

// "(( @" => "))(("


// Notes:

// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is actually the expected result, not the input! (these languages are locked so that's not possible to correct it).


// my solution

function duplicateEncode(word){
  return word.toLowerCase().split('').reduce((prev, next, i, word) => {
    if (word.indexOf(word[i]) !== word.lastIndexOf(word[i])) {
      return prev + ')';
    } else {
      return prev + '(';
    }
  }, '');
}

// bp & clever solution 

function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}
