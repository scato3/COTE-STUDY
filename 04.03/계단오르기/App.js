const stdin =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin")
    : `6
10
20
15
25
10
20`;

const input = stdin.toString().trim().split("\n");
let [N, ...arr] = input;
arr = arr.map(v => +v)
N = +N;

const dp = new Array(N).fill(0);
dp[0] = arr[0];
dp[1] = Math.max(arr[0] + arr[1], arr[1])
dp[2] = Math.max(arr[0] + arr[2], arr[1] + arr[2])

for(let i=3; i<N; i++) {
    dp[i] = Math.max(arr[i] + arr[i-1] + dp[i-3], arr[i] + dp[i-2])
}

console.log(dp[N-1]);

// DP