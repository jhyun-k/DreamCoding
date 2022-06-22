console.log(globalThis);
console.log(this); // 전역객체

console.log(Infinity);
console.log(NaN);
console.log(undefined);

eval('const num = 2; console.log(num)') // js 코드로 변환시켜줌
console.log(isFinite(1)); // 유한하기때문에 true
console.log(isFinite(Infinity)); // 무한하기 때문에 false

console.log(parseFloat('23.45'));//문자열인데 소수점이 들어있는 숫자가 있다면 숫자로 변환
console.log(parseInt('23.45')); // 문자열 안에 들어가 있는 실수를 정수로 변환
console.log(parseInt('11')); // 문자열 안에 있는 숫자를 정수로 변환 

// URL (URI (Uniform Resourse Identifier) 하위개념)
// 아스키 문자로만 구성되어야함
//한글이나 특수문자는 이스케이프 처리해야한다

const URL = 'http://드림코딩.com'
const encoded = encodeURI(URL)// 아스키코드로 변환시켜줌
console.log(encoded); 

const decoded = decodeURI(encoded)
console.log(decoded);

// 전체 URL이 아니라 부분적인 것은 Component 이용

const part  = '드림코딩.com'
console.log(encodeURIComponent(part));