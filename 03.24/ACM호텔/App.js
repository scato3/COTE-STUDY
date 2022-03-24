const input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');

const N = Number(input.shift());

for(let i=0; i<N ; i++) {
    const Arr = input[i].split(' ');
    let H = Number(Arr.shift());
    Arr.shift();
    let N = Number(Arr.shift());

    const floor = N % H === 0 ? H : N % H;
    const room = Math.ceil(N/H);

    console.log(`${floor}0${room}`);
}