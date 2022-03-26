const input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');

const num = Number(input.shift())

input.sort((a,b) => a.split(' ')[0] - b.split(' ')[0])

console.log(input.join('\n'));
