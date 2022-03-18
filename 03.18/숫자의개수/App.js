const input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');

let num = input[0] * input[1] * input[2] 

let len = num.toString().length;
let arr = (num+'').split('')

for(let i=0; i<=9; i++) {
    let count = 0;
    for(let j=0; j<len; j++) {
        if(Number(arr[j]) === i) {
            count++;
        }
    }
    console.log(count);
}


