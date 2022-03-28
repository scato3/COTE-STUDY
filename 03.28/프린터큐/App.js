const stdin = process.platform === 'linux' 
? require('fs').readFileSync('/dev/stdin')
: `3
1 0
5
4 2
1 2 3 4
6 0
1 1 9 1 1 1`;

const input = stdin.toString().trim().split("\n");
const N = Number(input[0])
let arr = [];

for(let i=1; i<N * 2; i+=2) {
    input[i] = input[i].split(' ');
    let n = +input[i][0];
    let m = +input[i][1];

    let best = input[i+1].split(' ').map(Number);
    let queue = best.map((v, i) => [i, v]) // i는 idx번호
    
    best.sort((a,b) => b-a); // 정렬 후 값
    
    let cnt = 0;
    while(queue.length > 0) {
        let idx = queue[0][0];
        let val = queue[0][1];
        queue.shift();

        if(val < best[cnt]) {
            queue.push([idx, val])
        } else {
            cnt++;
            if(idx === m) break;
        }
    }
    arr.push(cnt);
}

console.log(arr.join('\n'));

