// Description:
// Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Example:

// solution(1000); // should return 'M'
// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000
// Remember that there can't be more than 3 identical symbols in a row.

// More about roman numerals - http://en.wikipedia.org/wiki/Roman_numerals

// best solution

function solution(number){
  var roman = {M:1000,CM:900, D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1 }
  var ans = '';
  while (number > 0) {
    for(a in roman) { 
      if(roman[a] <= number) {
        ans += a; 
        number -= roman[a]; 
        break;
      }           
    }
  }
  return ans;
}


// my solution

function solution(number){
  result = [];
  while (number >= 1000) {
    result.push('M');
    number -= 1000;
  }
  while (number >= 500) {
    if (number >= 900) {
      result.push('CM');
      number -= 900;
    } else {    
      result.push('D');
      number -= 500;
    }
  }
  while (number >= 100) {
  if (number >= 400) {
      result.push('CD');
      number -= 400;
    } else {
      result.push('C');
      number -= 100;
    }
  }
  while (number >= 50) {
    if (number >= 90) {
      result.push('XC');
      number -= 90;
    } else {    
      result.push('L');
      number -= 50;
    }
  }
  while (number >= 10) {
    if (number >= 40) {
      result.push('XL');
      number -= 40;
    } else {    
      result.push('X');
      number -= 10;
    }
  }
  while (number >= 5) {
    if (number === 9) {
      result.push('IX');
      number -= 9;
    } else {    
      result.push('V');
      number -= 5;
    }
  }
  while (number >= 1) {
    if (number === 4) {
      result.push('IV');
      number -= 4;
    } else {    
      result.push('I');
      number -= 1;
    }
  }
  return result.join('');
}