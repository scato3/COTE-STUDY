const stdin =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin")
    : `16 4
noj.am IU
acmicpc.net UAENA
startlink.io THEKINGOD
google.com ZEZE
nate.com VOICEMAIL
naver.com REDQUEEN
daum.net MODERNTIMES
utube.com BLACKOUT
zum.com LASTFANTASY
dreamwiz.com RAINDROP
hanyang.ac.kr SOMEDAY
dhlottery.co.kr BOO
duksoo.hs.kr HAVANA
hanyang-u.ms.kr OBLIVIATE
yd.es.kr LOVEATTACK
mcc.hanyang.ac.kr ADREAMER
startlink.io
acmicpc.net
noj.am
mcc.hanyang.ac.kr`;

const input = stdin.toString().trim().split("\n");
const [N, M] = input.shift().split(' ').map(Number);

const siteMap = new Map();

for(let i=0; i<N; i++) {
  let site = input[i].split(' ')[0];
  let password = input[i].split(' ')[1];
  siteMap.set(site, password);
}

const Q = input.slice(N, input.length);
let answer = [];

Q.forEach(v => {
  answer.push(siteMap.get(v))
})

console.log(answer.join('\n'));
