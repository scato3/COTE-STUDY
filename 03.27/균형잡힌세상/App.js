const input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');

const open = ["[", "("];
const close = ["]", ")"];

let arr;
const answer = [];

input.slice(0, input.length-1).forEach((v) => {
  let check = false;
  arr = [];
  for (let i = 0; i < v.length; i++) {
    if (open.includes(v[i])) arr.push(v[i]);
    else if (close.includes(v[i])) {
        if(arr.pop() !== open[close.indexOf(v[i])]) {
            answer.push('no');
            check = true;
            break;
        }
    }
  }

  if(!check) {
    if(arr.length === 0) answer.push('yes');
    else answer.push('no');
  }
});

console.log(answer.join('\n'));

// 구글링 참고