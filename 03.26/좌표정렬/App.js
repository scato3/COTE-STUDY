const input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');

const num = Number(input.shift())
const arr = input.map(v => v.split(' ').map(x => Number(x)))

let result = '';

arr.sort((a,b) => {
    if(a[0] !== b[0]) {
        return a[0] - b[0];
    } else {
        return a[1] - b[1];
    }
}).forEach(x => {
    result += `${x[0]} ${x[1]}\n`
})

console.log(result);