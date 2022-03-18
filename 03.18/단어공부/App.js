const input = require('fs').readFileSync('./input.txt').toString().trim()

let answer;
let alpha = input.toUpperCase()

const sH = new Map();

for(let x of alpha) {
    if(sH.has(x)) sH.set(x, sH.get(x) + 1)
    else sH.set(x, 1)
}

let max = Number.MIN_SAFE_INTEGER;

for(let [key, val] of sH) {
    if(val > max) {
        max = val;
        answer = key;
    }
    else if(val == max) {
        answer = '?'
    } 
}

console.log(answer);
