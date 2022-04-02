const stdin =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin")
    : `3
0
1
3`;

const input = stdin.toString().trim().split("\n");
const N = Number(input.shift())

for(let i=0; i<N; i++) {
    const n = input[i];
    const fibonacci = [[1,0], [0, 1]]

    for(let j=2; j<=n; j++) {
        fibonacci[j] = [
            fibonacci[j-1][0] + fibonacci[j-2][0],
            fibonacci[j-1][1] + fibonacci[j-2][1]
        ]
    }
    console.log(fibonacci[n].join(' '));
}