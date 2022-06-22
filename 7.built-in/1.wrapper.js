//래퍼 객체 (Wrapper Object)
//원시값을 필요에 따라서 관련된 빌트인 객체로 변환한다

const number =123; // number 원시타입
// number 원시타입을 감싸고 있는 Number 객체로 감싸짐 

console.log(number.toString());
console.log(number);

const text = 'text' // string 문자열
console.log(text);
text.length // String 객체
text.trim()

// 원시타입에 . 찍으면 자동으로 자바스크립트 안에 있는 래퍼객체로 감싸짐