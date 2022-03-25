const input = require('fs').readFileSync('./input.txt').toString().trim()

const num = Number(input);

let sum = 1, i = 1;

while(sum < num) {
    sum += 6 * i;
    i++;
}

console.log(i);