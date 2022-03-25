const input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');

const T = Number(input.shift())

for(let i=0; i<T; i++) {
    const k = Number(input.shift()) // 층
    const n = Number(input.shift()) // 호

    const home = Array.from(Array(k+1), () => Array(n+1).fill(0))
    for(let i=1; i<=n; i++) {
        home[0][i] = i;
    }
    for(let i=1; i<=k; i++) {
        for(let j=1;j<=n; j++) {
            home[i][j] = home[i-1][j] + home[i][j-1];
        }
    }
    console.log(home[k][n]);
}

