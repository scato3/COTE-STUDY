const input = require('fs').readFileSync('./input.txt').toString().trim()

const num = Number(input);
let answer = 0;

for(let i=0; i<num; i++) {
    let sum = 0;

    const candidate = i;
    const stringValue = candidate.toString();

    for(let i=0; i<stringValue.length; i++) {
        sum += Number(stringValue[i])
    }

    sum += candidate;

    if(sum == num) {
        answer = candidate;
        break;
    }
}
console.log(answer);