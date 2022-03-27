const input = require('fs').readFileSync('./input.txt').toString().trim().split('\n').map(Number);

const num = input.shift();

let stack = [];
let sum = 0;

for (let i = 0; i < num; i++) {
  if (input[i] !== 0) stack.push(input[i]);
  else stack.pop();
}

if (stack.length !== 0) {
  sum = stack.reduce((v, i) => {
    return v + i;
  });
} else sum = 0;

console.log(sum);
