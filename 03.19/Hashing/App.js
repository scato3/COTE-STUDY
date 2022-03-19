const input = require("fs").readFileSync("./input.txt").toString().trim().split("\n");

let num = input.shift();
const mod = 1234567891

let str = input.join('');
let answer=0;
let temp = 1;

for(let i=0; i<num; i++) {
    answer += ((str.charCodeAt(i)-96) * temp) % mod;
    temp *= 31;
    temp %= mod;
    answer %= mod;
}

console.log(answer);

