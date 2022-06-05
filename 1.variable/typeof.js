//typeof 데이터 타입을 확인
// 값을 타입 문자열로 반환

let variable ;
console.log(typeof variable); //undefined

variable = ''
console.log(typeof variable); // string

variable = 123
console.log(typeof variable); // number

// JS는 할당된 값에 따라 타입이 결정됨
// weakly type 같은 변수에도 값에 따라 타입 결정됨

variable = function(){}
console.log(typeof variable); // function


