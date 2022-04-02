const stdin =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin")
    : `25`;

const input = stdin.toString().trim()
const N = +input;

const dp = new Array(N+1).fill(0);
dp[1] = 1;

for(let i=2; i<=N; i++) {
    let min = 4;
    for(let j=1; j*j<=i; j++) {
        min = Math.min(min, dp[i-j*j])
    }
    dp[i] = min + 1;
}

console.log(dp[N]);