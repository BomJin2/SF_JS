/** 산술 연산자 */

console.log(10 + 20);
console.log(20 - 10);
console.log(10 * 20);
console.log(20 / 10);

/** 나머지 연산자를 통해 짝수/홀수를 구분지을 수 있다. */

console.log(20 % 3);

function isEven(num) {
  return num % 2 === 0;
}

console.log(isEven(32));

/** 증감 연산자 (Increment & Decrement) */
let c = 30;
console.log(c++);
console.log(c);

let d = 30;
console.log(++d);
console.log(d);

let e = 30;
console.log(e--);
console.log(e);

let f = 30;
console.log(--f);
console.log(f);
