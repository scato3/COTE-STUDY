const input = require('fs').readFileSync('./input.txt').toString().trim()

let sum = Number(input)
let cnt = 0;

while(true) {
if(sum % 5 === 0) {
    console.log(sum / 5 + cnt)
    break;
}

if(0 > sum) {
    console.log('-1')
    break;
}

sum -= 3;
cnt++;
}