const input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');

const num = Number(input.shift())
const arr = input.map(x => x.split(' ').map(x => +x))

let result = '';

arr.sort((a,b) => {
    if(a[1] !== b[1]) {
        return a[1] - b[1];
    } else {
        return a[0] - b[0];
    }
}).forEach(x => {
    result += `${x[0]} ${x[1]}\n`
})

console.log(result);