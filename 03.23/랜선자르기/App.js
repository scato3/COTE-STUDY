const input = require('fs').readFileSync('./input.txt').toString().trim().split('\n')

const num = input.shift().split(' ')

const n = Number(num[0])
const k = Number(num[1])

const lines = input.map(Number).sort((a,b) => a-b);

let start = 0;
let end = lines[lines.length-1];
let answer = Number.MIN_SAFE_INTEGER;

while(start <= end) {
    let mid = Math.floor((start + end) / 2)
    let result = 0;
    for(let x of lines) {
        result += Math.floor(x / mid);
    }

    if(result >= k) {
        if(mid > answer) answer = mid;
        start = mid + 1;
    } else {
        end = mid - 1;
    }
}


console.log(answer);

// binarySearch



