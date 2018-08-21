//my solution

function validBraces(braces) {
  if (braces.length % 2 !== 0) return false;
  let openBraces = ['(', '{', '['];
  let closeBraces = [')', '}', ']'];
  let openCount = [];
  let closeCount = [];
  let result = true;
  braces.split('').forEach((char) => {
    if (openBraces.indexOf(char) > -1) {
      openCount.push(openBraces.indexOf(char))
    } else {
      if (openCount.length === 0) return false;
      closeCount.push(closeBraces.indexOf(char));
    }
    if (openCount.length === closeCount.length) {
      if (openCount.toString() === closeCount.reverse().toString()) {
        openCount = [];
        closeCount = [];   
      } else {
        result = false;
      }       
    }
  });
  if (openCount.length !== 0 || closeCount.length !== 0) return false;
  return result;
}

//best solution

function validBraces(braces){
  var matches = { '(':')', '{':'}', '[':']' };
  var stack = [];
  var currentChar;

  for (var i=0; i<braces.length; i++) {
    currentChar = braces[i];

    if (matches[currentChar]) { // opening braces
      stack.push(currentChar);
    } else { // closing braces
      if (currentChar !== matches[stack.pop()]) {
        return false;
      }
    }
  }

  return stack.length === 0; // any unclosed braces left?
}

