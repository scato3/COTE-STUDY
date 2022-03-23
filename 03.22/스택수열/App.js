    const input = require('fs').readFileSync('./input.txt').toString().trim().split('\n')

    const [n, ...num] = input;

    const numbers = num.map(v => +v);

    const stack = [];
    let answer = '';
    let count = 1;

    for(let i=0; i<n; i++) {
        const number = numbers.shift();
        while(count <= number) {
            stack.push(count++);
            answer += '+ ';
        }
        if(stack.pop() !== number) {
            answer = 'NO'
            break;
        }
        answer += '- '
    }

    console.log(answer.split(' ').join('\n'))
