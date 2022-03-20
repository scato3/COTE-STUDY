const input = require("fs").readFileSync("./input.txt").toString().trim().split("\n");

let num = Number(input.shift());


for(let i=0; i<num; i++) {
    const cases = input[i];
    let answer = 'YES'
    const stack = [];
    for(let j=0; j<cases.length; j++) {
        if(cases[j] === '(') {
            stack.push(cases[j]);
        } else if(cases[j] === ')') {
            if(stack.length === 0) {
                answer = 'NO'
                break;
            }
            stack.pop();
        }
    }
    if(stack.length !==0) {
        answer = 'NO'
    }
    console.log(answer);
}




