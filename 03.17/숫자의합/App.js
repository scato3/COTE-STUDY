let input = require("fs").readFileSync("./input.txt").toString().split("\n");

let num = input[1].split("");
let cnt = Number(input[0]);
let sum = 0;
for (let i = 0; i < cnt; i++) {
  sum += Number(num[i]);
}

console.log(sum);
