let a, b, c, d, e;
let myArr = ['bmw', 'audi', 'mercedes', 'porsche', 'maserati'];

let others;

[a, c, b, ...others] = myArr;

console.log(a);
console.log(b);
console.log(c);
console.log(others);