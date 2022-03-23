const input = require('fs').readFileSync('./input.txt').toString().trim().split(' ').map(Number).sort((a,b) => b-a);

let a = input[0];
let b = input[1];

function solution(a, b) {
  let c = 0;

  while (b !== 0) {
    c = a % b;
    a = b;
    b = c;
  }
  return a;
}

console.log(solution(a,b))
console.log(a * b / solution(a,b));

// 유클리드 호제법