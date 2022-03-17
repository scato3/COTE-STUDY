const input = require('fs').readFileSync('./input.txt').toString().trim().split(' ');

let count = 0;
for(let i=0; i<input.length; i++) {
    if(input[i] < input[i+1]) {
        count++;
    }
}

const result = {
    7: 'ascending',
    0: 'descending',
}[count]

console.log(result || 'mixed')