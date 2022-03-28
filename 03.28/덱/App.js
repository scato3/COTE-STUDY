const stdin = process.platform === 'linux' 
? require('fs').readFileSync('/dev/stdin')
: `15
push_back 1
push_front 2
front
back
size
empty
pop_front
pop_back
pop_front
size
empty
pop_back
push_front 3
empty
front`;

const input = stdin.toString().trim().split("\n");

class Deque {
  constructor() {
    this._arr = [];
  }

  push_front(x) {
    this._arr.unshift(x);
  }

  push_back(x) {
    this._arr.push(x);
  }

  pop_front() {
    return this._arr.length === 0 ? -1 : this._arr.shift();
  }

  pop_back() {
    return this._arr.length === 0 ? -1 : this._arr.pop();
  }

  size() {
    return this._arr.length;
  }
  empty() {
    return this._arr.length === 0 ? 1 : 0;
  }
  front() {
    return this._arr.length === 0 ? -1 : this._arr[0];
  }
  back() {
    return this._arr.length === 0 ? -1 : this._arr[this._arr.length - 1];
  }
}

const deque = new Deque();

let answer = [];

for (let i = 1; i < input.length; i++) {
  let p = input[i].split(" ");

  switch (p[0]) {
    case "push_front":
      deque.push_front(Number(p[1]));
      break;

    case "push_back":
      deque.push_back(Number(p[1]));
      break;

    case "pop_front":
      answer.push(deque.pop_front());
      break;

    case "pop_back":
      answer.push(deque.pop_back());
      break;

    case "size":
      answer.push(deque.size());
      break;

    case "empty":
      answer.push(deque.empty());
      break;

    case "front":
      answer.push(deque.front());
      break;

    case "back":
      answer.push(deque.back());
      break;
  }
}

console.log(answer.join("\n"));
