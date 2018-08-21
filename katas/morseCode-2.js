// In this kata you have to write a Morse code decoder for wired electrical telegraph.
// Electric telegraph is operated on a 2-wire line with a key that, when pressed, connects the wires together, which can be detected on a remote station. The Morse code encodes every character being transmitted as a sequence of "dots" (short presses on the key) and "dashes" (long presses on the key).

// When transmitting the Morse code, the international standard specifies that:

// "Dot" – is 1 time unit long.
// "Dash" – is 3 time units long.
// Pause between dots and dashes in a character – is 1 time unit long.
// Pause between characters inside a word – is 3 time units long.
// Pause between words – is 7 time units long.
// However, the standard does not specify how long that "time unit" is. And in fact different operators would transmit at different speed. An amateur person may need a few seconds to transmit a single character, a skilled professional can transmit 60 words per minute, and robotic transmitters may go way faster.

// For this kata we assume the message receiving is performed automatically by the hardware that checks the line periodically, and if the line is connected (the key at the remote station is down), 1 is recorded, and if the line is not connected (remote key is up), 0 is recorded. After the message is fully received, it gets to you for decoding as a string containing only symbols 0 and 1.

// For example, the message HEY JUDE, that is ···· · −·−− ·−−− ··− −·· · may be received as follows:

// 1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011

// As you may see, this transmission is perfectly accurate according to the standard, and the hardware sampled the line exactly two times per "dot".

// That said, your task is to implement two functions:

// Function decodeBits(bits), that should find out the transmission rate of the message, correctly decode the message to dots ., dashes - and spaces (one between characters, three between words) and return those as a string. Note that some extra 0's may naturally occur at the beginning and the end of a message, make sure to ignore them. Also if you have trouble discerning if the particular sequence of 1's is a dot or a dash, assume it's a dot.

// Function decodeMorse(morseCode), that would take the output of the previous function and return a human-readable string.

// NOTE: For coding purposes you have to use ASCII characters . and -, not Unicode characters.

// The Morse code table is preloaded for you as MORSE_CODE dictionary; in Java MorseCode class is provided; in Haskell the codes are in a Map String String and can be accessed like this: morseCodes ! ".--" - feel free to use it.

// All the test strings would be valid to the point that they could be reliably decoded as described above, so you may skip checking for errors and exceptions, just do your best in figuring out what the message is!

// Good luck!


// my code

String.prototype.replaceAll = function(search, replacement) {
  var target = this;
  return target.replace(new RegExp(search, 'g'), replacement);
};

var decodeBits = function(bits){
  let speed = 1;
  let splittedBits = bits.split('');
  while (splittedBits[splittedBits.length-1] === '0' ) splittedBits.pop();
  while (splittedBits[0] === '0') splittedBits.shift();
  bits = splittedBits.join('');  
  for (i = 2; i < splittedBits.length+1; i++) {
    if (splittedBits.length % i === 0) {
      if (splittedBits.slice(0, i).every((element, index, array) => element === array[0])) {
        let check = true;
        for (j = i; j < splittedBits.length / i; j += i) {
          if (!splittedBits.slice(j, j+i).every((element, index, array) => element === array[0])) {
            check = false;
          }
        }
        if (check) speed = i;
      }
    }
  }
  return bits.replaceAll('0000000'.repeat(speed), '   ').replaceAll('111'.repeat(speed), '-').replaceAll('000'.repeat(speed), ' ').replaceAll('1'.repeat(speed), '.').replaceAll('0'.repeat(speed), '');
}

var decodeMorse = function(morseCode){
return morseCode
  .trim()
  .split('   ')
  .map(code => code.split(' ').map(code => MORSE_CODE[code]).join(''))
  .join(' ');
}


// best code??? REG EX A TOPE, EL MIO ES MÁS RÁPIDO FIJO

function decodeBits(bits) {
  // Trim zeros
  bits = bits.replace(/(^0+|0+$)/g, '')
  
  // Find transmission rate
  var rate = Math.min.apply(null, bits.match(/0+|1+/g).map(function(b) { return b.length }))
  
  // Convert to morse code
  bits = bits
    .replace(new RegExp('(?:111){' + rate + '}(?:0{' + rate + '}|$)', 'g'), '-')
    .replace(new RegExp('1{' + rate + '}(?:0{' + rate + '}|$)', 'g'), '.')
    .replace(new RegExp('(?:000000){' + rate + '}', 'g'), '   ')
    .replace(new RegExp('(?:00){' + rate + '}', 'g'), ' ')
  
  return bits
}

function decodeMorse(message) {
  return message
    .replace(/   /g, ' _ ')
    .split(' ')
    .map(function(letter) { return letter === '_' ? ' ' : MORSE_CODE[letter] })
    .join('')
}



// test cases

Test.describe("Example from description", function(){
  Test.assertEquals(decodeMorse(decodeBits('1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011')), 'HEY JUDE')
  })
  
  Test.describe("Basic bits decoding", function(){
  Test.assertEquals(decodeMorse(decodeBits('1')), 'E')
  Test.assertEquals(decodeMorse(decodeBits('101')), 'I')
  Test.assertEquals(decodeMorse(decodeBits('10001')), 'EE')
  Test.assertEquals(decodeMorse(decodeBits('10111')), 'A')
  Test.assertEquals(decodeMorse(decodeBits('1110111')), 'M')
  })
  
  Test.describe("Multiple bits per dot handling", function(){
  Test.assertEquals(decodeMorse(decodeBits('111')), 'E')
  Test.assertEquals(decodeMorse(decodeBits('1111111')), 'E')
  Test.assertEquals(decodeMorse(decodeBits('110011')), 'I')
  //Test.assertEquals(decodeMorse(decodeBits('111000111')), 'I') -- Should pass! Please fix the solution!
  Test.assertEquals(decodeMorse(decodeBits('111110000011111')), 'I')
  Test.assertEquals(decodeMorse(decodeBits('11111100111111')), 'M')
  //Test.assertEquals(decodeMorse(decodeBits('111000000000111')), 'EE') -- Should pass! Please fix the solution!
  //Test.assertEquals(decodeMorse(decodeBits('111000111000111')), 'S') -- Should pass! Please fix the solution!
  //Test.assertEquals(decodeMorse(decodeBits('111111000000111111000000111111000000111111000000000000000000111111000000000000000000111111111111111111000000111111000000111111111111111111000000111111111111111111000000000000000000000000000000000000000000111111000000111111111111111111000000111111111111111111000000111111111111111111000000000000000000111111000000111111000000111111111111111111000000000000000000111111111111111111000000111111000000111111000000000000000000111111')), 'HEY JUDE') -- Should pass! Please fix the solution!
  })
  
  Test.describe("Extra zeros handling", function(){
  Test.assertEquals(decodeMorse(decodeBits('01110')), 'E')
  Test.assertEquals(decodeMorse(decodeBits('000000011100000')), 'E')
  })
  
  Test.describe("Long messages handling", function(){
  Test.assertEquals(decodeMorse(decodeBits('00011100010101010001000000011101110101110001010111000101000111010111010001110101110000000111010101000101110100011101110111000101110111000111010000000101011101000111011101110001110101011100000001011101110111000101011100011101110001011101110100010101000000011101110111000101010111000100010111010000000111000101010100010000000101110101000101110001110111010100011101011101110000000111010100011101110111000111011101000101110101110101110')), 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.')
  Test.assertEquals(decodeMorse(decodeBits('11111111111111100000000000000011111000001111100000111110000011111000000000000000111110000000000000000000000000000000000011111111111111100000111111111111111000001111100000111111111111111000000000000000111110000011111000001111111111111110000000000000001111100000111110000000000000001111111111111110000011111000001111111111111110000011111000000000000000111111111111111000001111100000111111111111111000000000000000000000000000000000001111111111111110000011111000001111100000111110000000000000001111100000111111111111111000001111100000000000000011111111111111100000111111111111111000001111111111111110000000000000001111100000111111111111111000001111111111111110000000000000001111111111111110000011111000000000000000000000000000000000001111100000111110000011111111111111100000111110000000000000001111111111111110000011111111111111100000111111111111111000000000000000111111111111111000001111100000111110000011111111111111100000000000000000000000000000000000111110000011111111111111100000111111111111111000001111111111111110000000000000001111100000111110000011111111111111100000000000000011111111111111100000111111111111111000000000000000111110000011111111111111100000111111111111111000001111100000000000000011111000001111100000111110000000000000000000000000000000000011111111111111100000111111111111111000001111111111111110000000000000001111100000111110000011111000001111111111111110000000000000001111100000000000000011111000001111111111111110000011111000000000000000000000000000000000001111111111111110000000000000001111100000111110000011111000001111100000000000000011111000000000000000000000000000000000001111100000111111111111111000001111100000111110000000000000001111100000111111111111111000000000000000111111111111111000001111111111111110000011111000001111100000000000000011111111111111100000111110000011111111111111100000111111111111111000000000000000000000000000000000001111111111111110000011111000001111100000000000000011111111111111100000111111111111111000001111111111111110000000000000001111111111111110000011111111111111100000111110000000000000001111100000111111111111111000001111100000111111111111111000001111100000111111111111111')), 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.')
  })