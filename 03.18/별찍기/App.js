const input = require('fs').readFileSync('./input.txt').toString().trim()

let star='';
for(let i=0; i<input; i++) {
    star += '*'
    console.log(star);
}