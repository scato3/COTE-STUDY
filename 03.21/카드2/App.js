const input = require('fs').readFileSync('./input.txt').toString().trim()

// push를 쓰면 시간초과 

// let arr = Array.from({length: input}, (v, i) => i+1);

// while(arr.length > 1) {
//     arr.shift();
//     arr.push(arr.shift())
// }

// console.log(arr[0]);

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
 
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this._size = 0;
    }
 
    add(value) {
        const newNode = new Node(value);
 
        if (!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
        }
 
        this.tail = newNode;
        this._size++;
 
        return newNode;
    }
 
    getHead() {
        return this.head.value;
    }
 
    removeHead() {
        this.head = this.head.next;
        this.head.prev = null;
        this._size--;
    }
 
    getSize() {
        return this._size;
    }
}
 
function getLastCard(n) {
    const cards = new LinkedList();
 
    for (let i = 1; i <= n; i++) {
        cards.add(i);
    }
    while (cards.getSize() !== 1) {
        cards.removeHead();
        cards.add(cards.getHead());
        cards.removeHead();
    }
 
    return cards.getHead();
}

const N = +input[0];
 
const card = getLastCard(N);
console.log(card);

