const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, height] = input.shift().split(" ").map(Number);
const tree = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let start = 0;
let end = tree[tree.length - 1];
let answer = Number.MIN_SAFE_INTEGER;

while(start <= end) {
    let mid = Math.floor((start + end) / 2)
    let sum = 0;
    for(let x of tree) {
        if(x > mid) sum += x-mid;
    }

    if(sum >= height) {
        if(mid > answer) answer = mid;
        start = mid+1;
    } else {
        end = mid - 1;
    }
}
console.log(answer);

// binarySearch