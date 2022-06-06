let a = 2;
let b = 3;

let result = a + b * 4;
console.log(result); // 14 연산자도 우선순위 있다!

result = a++ +b * 4;
console.log(result); // 14 증가연산자를 뒤에 썼으니까 할당되고 계산되니까 14, 이 문이 끝난 다음에 a=3됨

//우선순위 조절하고 싶으면 () 써주기 << 최우선순위됨