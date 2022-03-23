const input = require('fs').readFileSync('./input.txt').toString().trim().split('\n')

const num = Number(input.shift())

const numbers = input.shift().split(' ').map(v => +v);
let cnt = 0;

function isPrime(num) {
    if(num === 1) return false;
    for(let i=2;i<=parseInt(Math.sqrt(num)); i++) {
        if(num % i === 0) return false;
    }
    cnt++;
}

for(let i=0; i<numbers.length; i++) {
    isPrime(numbers[i])
}

console.log(cnt);