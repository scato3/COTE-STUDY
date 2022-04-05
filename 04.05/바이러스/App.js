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
const N = Number(input.shift());
const connect = Number(input.shift());

const graph = [...new Array(N + 1)].map(() => []);
const visited = [...new Array(N + 1)].fill(0);

let cnt = 0;

for (let x of input) {
  let [start, end] = x.split(" ").map((v) => +v);
  graph[start].push(end);
  graph[end].push(start);
}

console.log(graph);
visited[1] = 1;

const dfs = (start) => {
  for (let end of graph[start]) {
    if (!visited[end]) {
      visited[end] = 1;
      cnt++;
      dfs(end);
    }
  }
};

dfs(1);
// console.log(cnt);
