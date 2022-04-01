const stdin =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin")
    : `26 5
Bulbasaur
Ivysaur
Venusaur
Charmander
Charmeleon
Charizard
Squirtle
Wartortle
Blastoise
Caterpie
Metapod
Butterfree
Weedle
Kakuna
Beedrill
Pidgey
Pidgeotto
Pidgeot
Rattata
Raticate
Spearow
Fearow
Ekans
Arbok
Pikachu
Raichu
25
Raichu
3
Pidgey
Kakuna`;

const input = stdin.toString().trim().split("\n");

const [N, M] = input.shift().split(' ').map(Number);

const pocketNum = new Map();
const pocketName = new Map();

for(let i=0; i<N; i++) {
    pocketName.set(i+1, input[i])
    pocketNum.set(input[i], i+1)
}

const arr = input.slice(N, input.length);
let answer = [];

arr.forEach(v => {
    if(isNaN(+v)) answer.push(pocketNum.get(v)) // 숫자가 아니면 숫자를 받아온다.
    else answer.push(pocketName.get(+v)) // 숫자가 맞으면 이름을 받아온다.
})

console.log(answer);