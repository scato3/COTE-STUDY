const input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');

let num;
let max = Number.MIN_SAFE_INTEGER;

for(let i=0; i<input.length; i++) {
    let a = Number(input[i].split(' '))
    if(a > max) {
        num = i+1;
        max = a;
    }
}

console.log(max);
console.log(num);