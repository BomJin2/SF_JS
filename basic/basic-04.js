/** 형 반환(Type Conversion) */

const A = 1; // number
const B = "1"; // string

console.log(A == B); //true -> 동등연산자 (형변환이 일어난다.)
console.log(A === B); //false -> 일치연산자 (개발 시, 되도록이면 일치연산자를 사용하도록 한다. 타입까지 비교함)

const C = 0;
const D = false;
const E = true;

console.log(C == D);
console.log(C == E);

/** 참과 거짓 (Truthy & Flasy)
 *
 * 숫자 0은 거짓에 해당한다.
 * null, undefined, false도 거짓에 해당한다.
 * NaN, 빈 문자데이터 "" 역시 거짓에 해당한다.
 *
 */

const fruits = ["사과", "바나나", "포도", "수박", "딸기"];
const emptyArr = [];

if (fruits) {
  console.log("배열 데이터 안에 아이템이 들어 있습니다.");
}

if (emptyArr.length) {
  console.log("배열 데이터 안에 아이템이 들어 있습니다.");
} else {
  console.log("배열 데이터 안에 아이템이 들어있지 않습니다.");
}
