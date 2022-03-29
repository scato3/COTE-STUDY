const stdin =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin")
    : `3 4 99
0 0 0 0
0 0 0 0
0 0 0 1`;

const input = stdin.toString().trim().split("\n");

const [N, M, block] = input.shift().split(" ").map(Number);

const board = input.map((v) => v.split(" ").map(Number));

function solution(s) {
  let blockNum = block;
  let remove = 0;
  let add = 0;
  let time = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] > s) {
        remove += board[i][j] - s;
        blockNum += board[i][j] - s;
      } else if (board[i][j] < s) {
        add += s - board[i][j];
        blockNum -= s - board[i][j];
      }
      time = remove * 2 + add;
    }
  }
  if (blockNum < 0) return [Number.MAX_SAFE_INTEGER, s];
  return [time, s];
}

const answer = [];
for (let i = 256; i >= 0; i--) {
    answer.push(solution(i))
}

answer.sort((a,b) => {
    if(a[0] === b[0]) return b[1]-a[1];
    else return a[0] - b[0];
})

console.log(answer[0].join(' '));
