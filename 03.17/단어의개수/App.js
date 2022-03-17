let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim();

function solution(input) {
    input = input.trim();
    if(input === "") return 0;
    return input.split(" ").length;
}

console.log(solution(input));

