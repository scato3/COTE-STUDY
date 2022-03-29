const input = require('fs').readFileSync('./input.txt').toString().trim().split('\n')

const N = Number(input.shift()) // 첫번 째
let arr1 = input[0].split(' ').map(Number);
const M = Number(input[1]); // 두번 째
let arr2 = input[2].split(' ').map(Number);
let answer = [];

const map = new Map();

arr1.forEach(v => {
    if(map.has(v)) map.set(v, map.get(v) + 1);
    else map.set(v, 1);
})

console.log(map);

arr2.forEach(v => answer.push(map.get(v) || 0))

console.log(answer.join(' '));