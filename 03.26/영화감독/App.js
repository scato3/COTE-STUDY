const input = require('fs').readFileSync('./input.txt').toString().trim()

const inputNum = Number(input);
let num = 666;
let check = 666;
let count = 1;

while(count !== inputNum) {
    num++;
    if(String(num).includes(check)) count++;
}

console.log(num);