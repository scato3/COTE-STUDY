const stdin =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin")
    : `10`;

const input = stdin.toString().trim()

const num = +input;

const first = parseInt(num / 5);
const second = parseInt(num / 25);
const third = parseInt(num / 125);

console.log(first+second+third);