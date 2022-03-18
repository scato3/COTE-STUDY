const input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');

const answer = [];

input.forEach((v => {
    let num = v % 42;

    if(answer.indexOf(num) === -1) answer.push(num);
}))

console.log(answer.length);