const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()

const result = [];

for (let i = 97; i <= 122; i++) {
    result.push(input.indexOf(String.fromCharCode(i)))
}

console.log(result.join(' '))
