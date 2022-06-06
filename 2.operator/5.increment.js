//증가 & 감소 연산자 Increment decrement operator

let a = 0;
console.log(a);
a++; //a = a+1;
console.log(a);
a--; //a = a-1;
console.log(a);

console.clear()

//주의! 
// a++ 필요한 연산을 하고, 그 뒤 값을 증가시킴
// ++a 값을 먼저 증가시키고, 필요한 연산을 함

a= 0;
let b = ++a; // a++ 이면 할당한 후 a가 증가하므로 b=0, a=1
console.log(b); // 1 증가하고 할당됨
console.log(a); // 1

console.log(a++); // 1 할당하고 증가
console.log(a); //2 

