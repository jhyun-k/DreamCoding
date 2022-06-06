function add(a,b){
    console.log(a);
    console.log(b);
    return a + b;
}
const sum = add; // 함수 이름 자체는 함수를 가리키고 있는 변수와 동일, 함수를 어디 할당하는 것은 함수의 메모리주소를 할당하는 것과 동일하다. 

// console.log(add(1,2));
console.log(sum(1,2));