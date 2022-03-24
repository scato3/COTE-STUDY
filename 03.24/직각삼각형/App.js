const input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');

for(let x of input) {
    let val = x.split(' ').map(Number);
    
    val.sort((a,b) => a-b);
    console.log(val);
    if(val[0] === 0) break;

    if((val[0] ** 2 ) + (val[1] ** 2) == (val[2] ** 2)) {
        console.log('right');
    } else console.log('wrong');
}

