const input = require("fs").readFileSync("./input.txt").toString().trim().split("\n");

const num = input.shift().split(' '); // 첫 줄 제거 후 반환, 공백으로 구분

const N = Number(num.shift()) // 가로

const M = Number(num.shift()) // 세로

const answer = [];

const whiteBoard = [
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
];

const blackBoard = [
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
];

function checkWhite(x, y) {
    let count = 0;
    for(let i=y; i<y+8; i++) {
        for(let j=x;j<x+8;j++) {
            if(input[i][j] !== whiteBoard[i-y][j-x]) {
                count++;
            }
        }
    }
    return count;
}

function checkBlack(x, y) {
    let count = 0;
    for(let i=y;i<y+8;i++) {
        for(let j=x;j<x+8;j++) {
            if(input[i][j] !== blackBoard[i-y][j-x]) {
                count++;
            }
        }
    }
    return count
}

for(let i=0;i+7<N;i++) {
    for(let j=0; j+7<M;j++) {
        answer.push(checkBlack(j,i))
        answer.push(checkWhite(j,i))
    }
}

console.log(Math.min(...answer));