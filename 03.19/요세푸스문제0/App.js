const input = require('fs').readFileSync('./input.txt').toString().trim().split(' ');

const num = Number(input.shift().split(' '));

const key = Number(input[0])

const arr = Array.from({length: num}, (v, i) => i+1);
const answer = [];

for(let i=0; i<num; i++) {
    for(let j=1; j<=key; j++) {
        if(j === key) {
            answer.push(arr.shift())
        }
        else {
            arr.push(arr.shift())
        }
    }
}

console.log('<' + answer.join(', ') + '>')