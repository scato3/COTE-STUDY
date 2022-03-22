const input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');

const [start, end] = input.shift().split(" ").map(Number);

let isPrime = Array.from({length: end+1 }, ()=> false);

isPrime[0] = true;
isPrime[1] = true;
for (let i = 2; i * i <= end; i++) {
  if (!isPrime[i]) {
    for (let j = i + i; j <= end; j += i) {
      // 에라토스테네스의 체
      isPrime[j] = true;
    }
  }
}

for (let i = start; i <= end; i++) {
  if (!isPrime[i]) {
    console.log(i);
  }
}
// j = i * i 가 아니라 i + i

