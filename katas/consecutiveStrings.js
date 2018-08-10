// You are given an array strarr of strings and an integer k. 
// Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// #Example: longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

// MY SOLUTION
function longestConsec(strarr, k) {
  if (strarr.length === 0 || k > strarr.length || k <= 0) return "";
  var strlength = strarr.map(function(str){return str.length});
  var sumResult = 0, item = 0, sum = 0;
  for (let i = 0; i < strlength.length; i++) {
    for (let j = i; j < (i + k); j++) {
      sum += strlength[j]
    }
    if (sum > sumResult) {
      sumResult = sum;
      item = i;
    }
    sum = 0;
  }
  var result = [];
  for (let i = 0; i < k; i ++) {
    result.push(strarr[item + i]);
  }
  return result.join('');
}

// BP SOLUTION
function longestConsec(strarr, k) {
  var longest = "";
  for(var i = 0; k > 0 && i <= strarr.length - k; i++) {
    var tempArray = strarr.slice(i, i + k);
    var tempStr = tempArray.join("");
    if (tempStr.length > longest.length) {
      longest = tempStr;
    }
  }
  return longest;
}

// CLEVER SOLUTION
function longestConsec(strarr, k) {
  if (strarr.length == 0 || k > strarr.length || k < 1) return "";
  let lens = strarr.map((_, i, arr) => arr.slice(i, i + k).join('').length);
  let i = lens.indexOf(Math.max(...lens));
  return strarr.slice(i, i + k).join('');
}