const input = require('fs').readFileSync('./input.txt').toString().trim()

let num = Number(input[0])

for(let i=1; i<=9; i++) {
    let result = num*i;
    console.log(`${num} * ${i} = ${result}`)
}