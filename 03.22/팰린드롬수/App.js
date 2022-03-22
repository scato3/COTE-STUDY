const input = require('fs').readFileSync('./input.txt').toString().trim().split('\n')

for(let i=0; i<input.length-1; i++) {
    if(Number(input[i].split('').reverse().join('')) === Number(input[i])) {
        console.log('yes');
    } else console.log('no')
}

