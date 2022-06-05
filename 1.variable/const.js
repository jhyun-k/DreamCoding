//let 재할당 가능
let a = 1;
a = 2;

//const 재할당 불가능 object의 값은 변경 가능
//1. 상수
//2.상수변수 or 변수

const text = 'hello'
//text = 'hi' 이렇게 하면 안됨

//1.상수

const MAX_FRUITS = 5; //상수를 사용할 때는 대문자로, 단어와 단어 사이는 _로 분리

//2. 재할당 불가능한 상수 변수 또는 변수

const apple = {
    name : 'apple',
    color : 'red',
    display : '🍎'
}
console.log(apple);
apple.name = 'orange'
apple.display = '🍈'
console.log(apple);