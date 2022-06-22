const textObj = new String ('Hello World!')
const text = 'Hello World!'

console.log(textObj);
console.log(text);

console.log(text[0]);//H
console.log(text[1]);//e

console.log(text.charAt(0));//H 얘도 인덱스값 (문자의 인덱스니까 H)

console.log(text.length); // 12 문자의 길이

console.log(text.indexOf('l'));// 인덱스값이라 0부터 시작하다보니 2
console.log(text.lastIndexOf('l'));// 해당문자열 뒤에서부터 찾아보기

//해당 문자열 있는지 없는지 
console.log(text.includes('tx'));//없으니까 false
console.log(text.includes('h')); // 대소문자 구분해서 false
console.log(text.includes('H')); // true

//문자열이 특정한 문자로 시작하는지 안하는지
console.log(text.startsWith('He')); // false
console.log(text.endsWith('!')); // true

//텍스트를 대/소문자로 바꾸기
console.log(text.toUpperCase());//HELLO WORLD!
console.log(text.toLocaleLowerCase());//hello world!

//특정 위치의 문자열 삭제
console.log(text.substring(0,2));//0부터 2까지의 문자열 반환 He

console.log(text.slice(2));//문자열 잘라내기, 앞에 두개부터 출력 llo World!
console.log(text.slice(-2));//d!

const space = '           space'

console.log(space.trim);

//스페이스 별로 문자열을 끊어주고 싶다면
const longText = 'Get to the point';
console.log(longText.split(' '));//[ 'Get', 'to', 'the', 'point' ] 특정 문자열을 기준으로 잘라주는데 이 경우에는 ' ' 라는 빈문자열(띄어쓰기)이 있을 때 마다 끊어줌

console.log(longText.split(' ',2));//끊어준 것 두개만 반환