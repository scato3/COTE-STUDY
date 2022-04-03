const stdin =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin")
    : `10`;

const input = stdin.toString().trim()
const N = +input;
const dp = new Array(N+1).fill(0)

for(let i=2;i<=N; i++) {
    dp[i] = dp[i-1]+1;

    if(i % 2 === 0) dp[i] = Math.min(dp[i], dp[i/2] + 1)

    if(i % 3 === 0) dp[i] = Math.min(dp[i], dp[i/3] + 1)
}

console.log(dp[N]);