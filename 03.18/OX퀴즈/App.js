const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

let num = Number(input[0]);
for (let i = 1; i <= num; i++) {
  let sum = 0;
  let count = 0;
  for(let j=0; j<input[i].length; j++) {
    if (input[i][j] === "O") {
      count++;
    } else {
      count = 0;
    }
    sum += count;
  }
  console.log(sum);
}

