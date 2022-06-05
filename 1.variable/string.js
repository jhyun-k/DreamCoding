//문자열 타입

let string = "안녕하세요";
string = `안녕!`

console.log(string);

//특수문자 출력
string = "'안녕!'"
console.log(string);

string = '안녕! \n 엘리야!'
console.log(string);

string = '안녕!\n 엘리야! \t\t 내 이름은 \n 지현'
console.log(string);


//템플릿 리터럴

let id = '지현';
let greetings = `안녕! 안녕 ${id}`

console.log(greetings);
