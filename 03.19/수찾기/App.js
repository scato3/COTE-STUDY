const input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');

const arr1 = input[1].split(' ')
const arr2 = input[3].split(' ')

let arr = new Set(arr1);

let result = arr2.map(v => arr.has(v) ? 1 : 0)

console.log(result.join('\n'))

// VSC에서는 arr1의 경우 개행문자가 계속 끝에 남아 있어, join('').trim().split(' ')을 해줘서 원형을 유지해줘야 답이 나왔으나
// 백준에서는 해당사항 없음.

