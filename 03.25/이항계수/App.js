const input = require('fs').readFileSync('./input.txt').toString().trim().split(' ');

let n = Number(input[0])
let k = Number(input[1])

function factorial(n) {
    if(n == 0) return 1;
    return n * factorial(n-1); // 재귀를 통한 계산
}

console.log(factorial(n) / (factorial(k) * factorial(n-k)));
