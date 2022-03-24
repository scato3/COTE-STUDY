const input = require('fs').readFileSync('./input.txt').toString().trim().split(' ').map(Number);

const userX = input[0];
const userY = input[1];
const circleX = input[2];
const circleY = input[3];

const answer = [userX, userY, circleX-userX, circleY-userY]

console.log(Math.min(...answer));
