const stdin =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin")
    : `3 4
ohhenrie
charlie
baesangwook
obama
baesangwook
ohhenrie
clinton`;

const input = stdin.toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);

const first = new Set();
const second = new Set();

let answer = [];

for (let i = 0; i < input.length; i++) {
  if (i < N) {
    first.add(input[i]);
  } else {
    second.add(input[i]);
  }
}

second.forEach((v) => {
  if (first.has(v)) answer.push(v);
});

answer.sort();
console.log(answer.length + '\n' + answer.join('\n'));
