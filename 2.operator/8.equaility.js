//동등 비교 관계 연산자 (Equality operator)
// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘 다 같음
// !== 값과 타입이 다름

console.log(2 == 2); //true
console.log(2 != 2); //false
console.log(2 != 3); //true
console.log(2 == 3); //false
console.log(2 == '2'); // true --> 타입은 다르지만 ''안에 있는 2가 자동으로 변환이 되면서 같다고 여김
console.log(2 === '2'); // false --> 타입이 다르기 때문에 false

// 코딩을 할 때에는 보통 타입까지 함께 확인하므로 === 을 쓰는 경우가 많음


console.log(true == 1); // true --> 타입은 다르지만 값이 같음
console.log(true === 1); // false
console.log(false == 0 ); // true --> 타입은 다르지만 값이 같음
console.log(false === 0 ); // false

console.clear();

const obj1 = {
    name:'js'     
}
const obj2 = {
    name:'js'
}

console.log(obj1==obj2); //false : 두 객체의 메모리주소가 다르기 때문에 다르다고 인식
console.log(obj1===obj2); // false : 값 자체가 다르니까 타입은 똑같이 object여도 false
console.log(obj1.name==obj2.name); //true : 문자열 js가 같으니까 true
console.log(obj1.name===obj2.name); //true : 문자열 js가 같으니까 true

let obj3 = obj2

console.log(obj3 == obj2); //true : 값도 똑같고, 동일한 메모리 주소를 갖고 있기 때문에 true
console.log(obj3 === obj2);


