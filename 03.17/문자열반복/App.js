let input = require("fs").readFileSync("./input.txt").toString().split("\n");

const num = input.shift();

for (let i = 0; i < num; i++) {
  let result = "";

  const [key, val] = input[i].split(" ");
  for (let j = 0; j < val.length; j++) {
      result += val[j].repeat(key);
  }
  console.log(result);
}
