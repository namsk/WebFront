//  수치형 
let n1 = 5; //  Literal
let n2 = Number(5); //  객체 이용 생성

console.log(n1, "==", n2, "?", n1 == n2);

//  다양한 형태의 수치 입력
const hex = 0xff0000;   //  16진수 입력
const oct = 0o10;       //  8진수 입력
console.log(hex, oct);

//  Math 내장 함수
console.log(Math.round(Math.PI)); //    PI 파이, round() 반올림
console.log(Math.min(1, 5, 3, 2, 6, 7), //  최솟값
            Math.max(9, 2, 6, 2, 4));   //  최댓값
console.log(Math.round(3.567), Math.trunc(3.567), Math.floor(3.567));

console.log("---------- Casting");
//  parseInt, parseFloat: 문자열 -> Number 형으로 변환
console.log(parseInt("011"));
console.log(parseInt("011", 2)); // 011 (2진수) -> Number
console.log(parseInt("123.456"));   //  정수 형태만 변환
console.log(parseFloat("123.456")); //  실수 형태 변환

//  숫자로 변환할 수 없는 형태의 변환 -> NaN
let v = parseInt("a123.456");   //  숫자로 변환할 수 없는 형태
console.log(v, typeof v);
//  NaN를 산술 연산에 포함시키면 -> NaN
console.log(v + 10); // NaN + 10
//  수치형 변수가 NaN인가를 확인
console.log(isNaN(v));  //  v가 NaN인가 확인

//  Infinity
v = 1/0;
console.log(v, typeof v);
//  Infinity가 포함된 산술 연산식 -> Infinity
console.log(v + 10);

//  유한수인지 확인 isFinite 함수
console.log(isFinite(v));   //  유한수인가?