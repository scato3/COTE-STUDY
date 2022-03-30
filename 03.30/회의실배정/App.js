const stdin =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin")
    : `11
1 4
3 5
0 6
5 7
3 8
5 9
6 10
8 11
8 12
2 13
12 14`;

const input = stdin.toString().trim().split("\n");

const num = Number(input.shift())
const data = input.map(v => v.split(' ').map(Number))
let answer = 0;

data.sort((a,b) => {
  if(a[1] === b[1]) return a[0] - b[0];
  else return a[1] - b[1];
})

let et = 0;

for(let x of data) {
  if(x[0] >= et) {
    answer++;
    et = x[1];
  }
}

console.log(answer);