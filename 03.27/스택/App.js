const stdin = process.platform === 'linux' 
? require('fs').readFileSync('/dev/stdin')
: `14
push 1
push 2
top
size
empty
pop
pop
pop
size
empty
pop
push 3
empty
top`;

const input = stdin.toString().trim().split('\n');

const num = Number(input.shift())
let stack = [];
let answer = [];

for(let i=0; i<num; i++) {
    switch(input[i]) {
        case 'pop':
            answer.push(stack.pop() || -1);
            break;

        case 'top':
            answer.push(stack[stack.length-1] || -1);
            break;
        
        case 'size':
            answer.push(stack.length);
            break;
        
        case 'empty':
            answer.push(stack[0] ? 0 : 1);
            break;
        
        default: 
            stack.push(Number(input[i].split(' ')[1]))
            break;
    }
}

console.log(answer.join('\n'));