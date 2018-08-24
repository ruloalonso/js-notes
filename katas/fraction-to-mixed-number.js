// Task
// Given a string representing a simple fraction x/y, your function must return a string representing the corresponding mixed fraction in the following format:

// [sign]a b/c

// where a is integer part and b/c is irreducible proper fraction. There must be exactly one space between a and b/c. Provide [sign] only if negative (and non zero) and only at the beginning of the number (both integer part and fractional part must be provided absolute).

// If the x/y equals the integer part, return integer part only. If integer part is zero, return the irreducible proper fraction only. In both of these cases, the resulting string must not contain any spaces.

// Division by zero should raise an error (preferably, the standard zero division error of your language).

// Value ranges
// -10 000 000 < x < 10 000 000
// -10 000 000 < y < 10 000 000
// Examples
// Input: 42/9, expected result: 4 2/3.
// Input: 6/3, expedted result: 2.
// Input: 4/6, expected result: 2/3.
// Input: 0/18891, expected result: 0.
// Input: -10/7, expected result: -1 3/7.
// Inputs 0/0 or 3/0 must raise a zero division error.
// Note
// Make sure not to modify the input of your function in-place, it is a bad practice.


// my solution

function mixedFraction(s){
  let dividend = Number(s.split('/')[0]);
  let divisor = Number(s.split('/')[1]); 
  
  if (dividend % divisor === 0) 
    return (dividend / divisor).toString(); 
  if (!divisor) 
    throw new Error('Invalid divisor ' + divisor);  
  
  let integer = dividend / divisor > 0 ? Math.floor(dividend/divisor) : Math.floor(dividend/divisor) + 1;
  
  for (let i = 2; i < 100; i ++) {
    if (dividend % i === 0 && divisor % i === 0) {
      dividend /= i;
      divisor /= i;
      i = 1;
    }
  }     
  
  if (integer === 0)
    if (dividend < 0 && divisor < 0)
    return Math.abs(dividend) + '/' + Math.abs(divisor)
    else if (dividend < 0 || divisor < 0)
    return (dividend < 0 || divisor < 0 ? '-' : '') + Math.abs(dividend) + '/' + Math.abs(divisor);
    else return Math.abs(dividend) + '/' + Math.abs(divisor);
  
  dividend %= divisor;  
  return integer + ' ' + Math.abs(dividend) + '/' + Math.abs(divisor);
}

// best solution ?????

function mixedFraction(s){
  //input s will be a simple fraction i.e. "4/3", "-10/7", "-22/7"
    var fraction = s.split("/").map(val => Number(val)),
        numerator = fraction[0],
        denominator = fraction[1],
        integer = 0;
    
    //anything divided by 0 produces an error
    if (denominator === 0) {
        throw new Error("Division by zero");
    }
    
    //0 divided by anything is 0
    if (numerator === 0) {
      return "0";
    }
    
    /* calculate gcf and divide numerator and denominator by
       it to reduce improper fraction as much as possible */
    var gcf = greatestCommonFactor(numerator, denominator);
        numerator /= gcf;
        denominator /= gcf;
    
    /* calculate the integer and numerator for
       mixed fraction; round integer down */
    integer += ~~(numerator / denominator);
    numerator %= denominator;
    
    //if output is a mixed number
    if (integer) {
        //checks to see if fraction will be negative
        if (numerator < 0 || denominator < 0) {
          //integer needs proper sign
          integer *= (integer < 0) ? 1 : -1;
        }
        return (numerator !== 0) 
        //integer is signed already - make numerator and denominator positive
                ? `${integer} ${Math.abs(numerator)}/${Math.abs(denominator)}` 
                : `${integer}`;
    }
    
    //if output is a simple fraction
    else {
      if (denominator < 0) {
        //make sure numerator is negative
        numerator *= (numerator < 0) ? 1 : -1;
      }
      return `${numerator}/${Math.abs(denominator)}`;
    }
  }
  
  /* calculates gcf utilizing Euclid's algorithm
     https://en.wikipedia.org/wiki/Greatest_common_divisor#Using_Euclid.27s_algorithm */
  function greatestCommonFactor(a, b) {
    return (b === 0) ? a : greatestCommonFactor(b, a % b);
  }

// most clever

gcd=(a,b)=> b==0 ? a : gcd(b,a%b);
function mixedFraction(s){
  var [x,y]=s.split("/").map(z=>+z);
  if (y==0) throw "ZeroDivisionError";
  if (x%y==0) return ""+x/y;
  var g=gcd(x,y),add=x/y<0 ? "-" : "";
  x=Math.abs(x/g),y=Math.abs(y/g);
  return add+(x<y ? "" : Math.floor(x/y)+" ")+x%y+"/"+y;
}