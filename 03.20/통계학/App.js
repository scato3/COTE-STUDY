const input = require("fs").readFileSync("./input.txt").toString().trim().split("\n").map(num => parseInt(num));

const num = input.shift();

let average;
let sum = 0;
let checkValue = [];
let maxValue=0;
let sH = new Map();

input.sort((a,b) => a-b);

for(let i=0; i<input.length; i++) {
    sum += input[i]
}

average = Math.round(sum / input.length) // 평균

if(average == '-0') average = 0;

const mid = input[Math.floor(input.length / 2)]

for(let i=0; i<input.length; i++) {
    if(sH.has(input[i])) sH.set(input[i], sH.get(input[i]) + 1)
    else sH.set(input[i], 1);
}

let max = Number.MIN_SAFE_INTEGER;

for(let val of sH.keys()) {
    if(max < sH.get(val)) max = sH.get(val);
}

for(let val of sH.keys()) {
    if(max === sH.get(val)) checkValue.push(val);
}

checkValue.sort((a,b) => a-b);

if(checkValue.length > 1) {
    maxValue = checkValue[1]
} else {
    maxValue = checkValue[0]
}

console.log(average); // 평균
console.log(mid); // 중앙값 
console.log(maxValue) // 두 번째로 빈도수
console.log(input[input.length-1] - input[0]);

// 모든 입력값이 다 정상 출력하는데 실패로 뜸, 웃긴게 구글에 나온 다른 사람들의 답도 죄다 오답으로 인식함