const input = require('fs').readFileSync('./input.txt').toString().trim().split(' ');

let up = Number(input[0])
let down = Number(input[1])
let max = Number(input[2])

console.log(Math.ceil((max-down) / (up-down)))