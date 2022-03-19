const input = require("fs").readFileSync("./input.txt").toString().trim().split("\n");

let num = input.shift();

let arr = Array.from(input);

let result = arr.sort((a,b) => a-b);

console.log(result.join('\n'))