// Write a method that takes a number and returns a string of that number in English. For example

// numberToEnglish(27) // => 'twenty seven'
// Your method should be able to handle any number between 0 and 99999. If given numbers outside of that range or non-Integer numbers, the method should return an empty string.

// my solution

const numberToEnglish = n => {
  if (n === 0) return 'zero';
  if (n < 0 || !Number.isInteger(n)) return '';
  let result = '';  
  
  if (n < 100) {  
    result = twoDigits(n);
  } else if (n < 1000) {
    result = threeDigits(n);
  } else {
    result = fourDigits(n);
  }
  
  function twoDigits(number) {
    var result = [];
    number = Number(number);
    var dicc = {ninety:90,eighty:80,seventy:70,sixty:60,fifty:50,forty:40,thirty:30,twenty:20,nineteen:19,eighteen:18,seventeen:17,sixteen:16,fifteen:15,fourteen:14,thirteen:13,twelve:12,eleven:11,ten:10,nine:9,eight:8,seven:7,six:6,five:5,four:4,three:3,two:2,one:1}
    while (number > 0) {
      for(a in dicc) { 
        if(dicc[a] <= number) {
          result.push(a); 
          number -= dicc[a]; 
          break;
        }           
      }
    }
    return result.join(' ');
  }
  
  function threeDigits(number) {
    number = Number(number);
    let result = [];
    if (number % 100 === 0) {
      return twoDigits(number.toString().substr(0,1)) + ' hundred';
    }
    if (number < 100) return twoDigits(number);
    
    result.push(twoDigits(number.toString().substr(0,1)));
    result.push(twoDigits(number.toString().substr(1,3)));
    return result.join(' hundred ');
  }
  
  function fourDigits(number) {
    let result = [];
    let stringy = number.toString();
    result.push(threeDigits(stringy.substr(0,stringy.length-3)));
    result.push(threeDigits(stringy.substr(stringy.length-3,3)));
    return result.join(' thousand ');
  }
  
  return result;
}



// best solution (RECURSIVE)

const numberToEnglish = num => {

  if (num % 1 !== 0 || num < 0 ) return '';
   
  const ones = { 0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen' }
  const tens = { 2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty', 6: 'sixty', 7: 'seventy', 8: 'eighty', 9: 'ninety' }
  
  const operations = [
    {
      check: n => n < 20,
      make: n => ones[n],
    },
    {
      check: n => n < 100,
      make: n => `${tens[n[0]]}${n[1] == 0 ? '' : ` ${ones[n[1]]}`}`,
    },
    {
      check: n => n < 1000,
      make: n => `${ones[n[0]]} ${n % 100 == 0 ? 'hundred' : `hundred ${numberToEnglish(Number(n.slice(1)))}`}`,
    },
    {
      check: n => true,
      make: n => `${numberToEnglish(n.slice(0, n.length - 3))} ${n % 1000 == 0 ? 'thousand' : `thousand ${numberToEnglish(Number(n.slice(-3)))}`}`,
    }];

const obj = operations.find(({ check }) => check(num));
return obj.make(num.toString())
};



// test cases

Test.describe("Basic tests",_=>{
  Test.it("should handle numbers between 0-99999",_=>{
    Test.assertEquals(numberToEnglish(0), 'zero');
    Test.assertEquals(numberToEnglish(7), 'seven');
    Test.assertEquals(numberToEnglish(11), 'eleven');
    Test.assertEquals(numberToEnglish(20), 'twenty');
    Test.assertEquals(numberToEnglish(47), 'forty seven');
    Test.assertEquals(numberToEnglish(100), 'one hundred');
    Test.assertEquals(numberToEnglish(305), 'three hundred five');
    Test.assertEquals(numberToEnglish(4002), 'four thousand two');
    Test.assertEquals(numberToEnglish(3892), 'three thousand eight hundred ninety two');
    Test.assertEquals(numberToEnglish(6800), 'six thousand eight hundred');
    Test.assertEquals(numberToEnglish(14111), 'fourteen thousand one hundred eleven');
    Test.assertEquals(numberToEnglish(20005), 'twenty thousand five');
    Test.assertEquals(numberToEnglish(99999), 'ninety nine thousand nine hundred ninety nine');
  })
  Test.it("should return empty string when given number out of range or non integer",_=>{
    Test.assertEquals(numberToEnglish(95.99), '');
    Test.assertEquals(numberToEnglish(-4), '');
  })    
})

Test.describe("Random tests",_=>{
const randint=(a,b)=>~~(Math.random()*(b-a+1))+a;
const sol=n=>n<0 || n>99999 || n%1!=0 ? "" : n<20 ? ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"][n] : n<100 ? [["twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"][~~((n-20)/10)],sol(n%10)].join(" ").replace(/ zero$/,"").trim() : n<1000 ? [sol(~~(n/100))+" hundred",sol(n%100)].join(" ").replace(/ zero$/,"").trim() : [sol(~~(n/1000))+" thousand",sol(n%1000)].join(" ").replace(/ zero$/,"").trim();

for (let i=0;i<40;i++){
  const n=randint(1,100)<96 ? randint(0,10**randint(1,5)-1) : randint(0,Math.pow(10,randint(1,5))-1)/100
  Test.it(`Testing for ${n}`,_=>{
    Test.assertEquals(numberToEnglish(n),sol(n),"It should work for random inputs too");
  }) 
}
})