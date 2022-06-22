const num1 = 123;
const num2 = new Number(123);
console.log(num1) //123
console.log(num2)//[Number: 123]

console.log(Number.MAX_VALUE);
//1.7976931348623157e+308
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.NaN);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);

/* 1.7976931348623157e+308
5e-324
9007199254740991
-9007199254740991
NaN
-Infinity
Infinity */

if(num1===Number.MAX_VALUE){

}
if(Number.isNaN(num1)){

}

//지수표기법 (매우 크거나 작은 숫자를 표기할 때 사용, 10의 n승으로 표기)

const num3 = 102;
console.log(num3.toExponential());//1.02e+2  e+2 는 10의 2승, 숫자를 지수표기법으로 바꿔주는 함수

// 반올림하여 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed());

console.log(num4.toString());

//원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(5));//1234.1 전체자릿수 표기가 안될 때는 지수표기법으로 반환




if(Number.EPSILON >0 && Number.EPSILON < 1){
    console.log(Number.EPSILON); //0과 1 사이에서 나타내 수 있는 가장 작은 숫자
}
const num= 0.1 + 0.2 - 0.2 
console.log(num);//0.10000000000000003

function isEqual (original, expected) {
    return original === expected;
    //return original - expected < Number.EPSILON
}

console.log(isEqual(1,1)); // true
console.log(isEqual(0.1,0.1)); //true
console.log(isEqual(num,1)); // false