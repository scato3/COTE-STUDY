const stdin =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin")
    : `7
6
1 2
2 3
1 5
5 2
5 6
4 7`;

const input = stdin.toString().trim().split("\n");
let N = Number(input.shift())
let virusNum = Number(input.shift())

let graph = [...new Array(N + 1)].map(() => []);
let visited = [...new Array(N + 1)].fill(0);

for(let i=0; i<virusNum; i++) {
    let start = Number(input[i].split(' ')[0])
    let end = Number(input[i].split(' ')[1])
    graph[start].push(end);
    graph[end].push(start);
}
visited[1] = 1;

function dfs(start) {
    for(let end of graph[start]) {
        if(!visited[end]) {
            visited[end] = 1;
        }
    }
}