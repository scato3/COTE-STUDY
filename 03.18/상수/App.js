const input = require('fs').readFileSync('./input.txt').toString().trim().split(' ');

const a = input[0].split('').reverse().join('');
const b = input[1].split('').reverse().join('');

console.log(Math.max(a , b))