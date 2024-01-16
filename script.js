/*
1-masal


let a = +prompt("a sonini kiriting:");
let b = +prompt("b sonini kiriting:");
let count = 0;

if (a < b) {
  for (let i = a; i <= b; i++) {
    console.log(i);
    count++;
  }
}

console.log("Chiqarilgan sonlar soni: " + count);
*/

/*


2-masala
let a = +prompt("a sonini kiriting:");
let b = +prompt("b sonini kiriting:");
let count = 0;

if (a < b) {
  for (let i = b - 1; i > a; i--) {
    console.log(i);
    count++;
  }
}

console.log("Chiqarilgan sonlar soni: " + count);
*/

/*


3-masala



let narx = 1000;
for (let i = 1; i <= 10; i++) {
  console.log(i*narx);
}

*/
/*
4-masala
let narx = 1000;
for (let i = 1.2; i <= 2; i + 1.2) {
  console.log(i.toFixed(1) * narx);
}
*/

/*
5-masal
let a = +prompt("a sonini kiriting:");
let b = +prompt("b sonini kiriting:");
let yigndi = 0;
for (let i = a; i <= b; i++) {
  yigndi += i;
}
console.log(yigndi);

*/
/*
6-masal
let a = +prompt("a sonini kiriting:");
let b = +prompt("b sonini kiriting:");
let yigndi = 0;
for (let i = a; i <= b; i++) {
  yigndi *= i;
}
console.log(yigndi);

*/

/*
7-masal
let a = +prompt("a sonini kiriting:");
let b = +prompt("b sonini kiriting:");
let yigndi = 0;
for (let i = a; i <= b; i++) {
  yigndi =i* i;
}
console.log(yigndi);

*/

/*
8-masala
let n = 5; 
let yigindi = 0;
for (let i = 1; i <= n; i++) {
  yigindi += 1 / i;
}
*/

/*
9-masala
let n = 5;
let yigindi = 1;
for (let i = 1.1; i <= n; i += 0.1) {
  yigindi *= i;
}
console.log(yigindi);
*/

/*

10-masala

let n = 5; 
let yigindi = 0;
for (let i = 1; i <= n; i++) {
  yigindi += (2 * i - 1);
}
console.log(yigindi); */
/*

11-masala


let a = 2;
let n = 5;
let yigindi = 1;
for (let i = 0; i < n; i++) {
  yigindi *= a;
}
console.log(yigindi);
*/

/*

12-masala


let a = 2;
let n = 5;

for (let i = 1; i <= n; i++) {
  let yigindi = 1;
  for (let j = 1; j <= i; j++) {
    yigindi *= a;
  }
  console.log(`${a}^${i} = ${yigindi}`);
}
*/
/*
1-masala


let a = 10;
let b = 3;
let yigindi = "";
while (a >= b) {
  a -= b;
  yigindi += "-";
}
console.log(yigindi);

*/
/*
2-masala


let a = 10;
let b = 3;
let count = 0;

while (a >= b) {
  a -= b;
  count++;
}

console.log("Kesmadan joylashtirish mumkin bo'lgan joylar soni: " + count);
*/
/*

3-masala


let n = 5; 
let isDarajasi = false;
while (n > 1) {
  if (n % 3 === 0) {
    isDarajasi = true;
    break;
  }
  n /= 3;
}
if (isDarajasi) {
  console.log("3-ning darajasi");
} else {
  console.log("3-ning darajasi emas");
}
*/

/*

5-masala
let n = 20; 
let hisob = 0;

while (n > 0) {
  let digit = n % 10;
  hisob = hisob * 10 + digit;
  n = Math.floor(n / 10);
}

console.log("Berilgan sonning teskari tartibdagi raqamlari: " + hisob);
*/
/*

6-masala

let n = 20;
let sum = 0;
let hisob = 1;
while (n > 0) {
  let son = n % 10;
  sum += son;
  hisob *= son;
  n = Math.floor(n / 10);
}
console.log("Berilgan sonning raqamlari yig'indisi: " + sum);
console.log("Berilgan sonning raqamlari soni: " + hisob);
*/
