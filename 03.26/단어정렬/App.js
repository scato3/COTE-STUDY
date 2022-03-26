const input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');

const num = Number(input.shift());

console.log([...new Set(input)].sort((a,b) => a.length-b.length || a.localeCompare(b)).join('\n'))

// a.localeCompare(b) 문자열 비교 
// a < b  -1
// a > b   1
// a == b  0
