const input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');

let num = input[0].split(' ').map(Number)[0]
let max = input[0].split(' ').map(Number)[1]

let card = input[1].split(' ').map(Number);
let len = input[1].length;
let sum = 0;
let arr = [];

for(let i=0; i<len; i++) {
    for(let j=i+1; j<len; j++) {
        for(let k=j+1; k<len; k++) {
            sum = card[i] + card[j] + card[k]
            if(max >= sum) {
                arr.push(sum);
            }
        }
    }
}

let answer = arr[0];

for(let x of arr) {
    if(answer < x) {
        answer = x;
    }
}

console.log(answer);