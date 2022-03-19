// Node.js로는 메모리 초과 이슈로 통과 불가능

const input = require("fs").readFileSync("./input.txt").toString().trim().split("\n");

const num = input.shift()

let arr = Array.from(input);

arr = arr.sort((a,b) => a-b);

console.log(arr.join('\n'))