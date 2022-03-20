const input = require("fs").readFileSync("./input.txt").toString().trim().split("\n")

let num = Number(input.shift());

let arr = [];
let answer = '';
for(let i=0; i<input.length;i++) {
    arr.push(input[i].split(' ').map(x=>+x)) // 배열의 모든 항목을 숫자로 변환
}

for(let i=0; i<arr.length; i++) {
    let count = 0;
    for(let j=0; j<arr.length;j++) {
        if(arr[i][0] <  arr[j][0]) {
            if(arr[i][1] < arr[j][1]) { // 키와 무게가 모두 더 작을 때 덩치가 작다.
                count++;
            }
        }
    }
    answer += count+1 + ' ';
}

console.log(answer);