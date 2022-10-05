// iterable 하다는 건 순회가 가능하다는 것!
// [Symbol.iterator] {} : Iterator ;
// 심볼 정의를 가진 객체나 특정한 함수가 Iterator를 리턴한다는 것은 순회 가능한 객체이다 라는걸 알 수 있음
// 순회가 가능하면 무엇을 할 수 있니? for..of, spread 연산자 사용 가능

const array = [1,2,3];
for(const item of array.entries()) {
    console.log(item);
}

//obj는 안 돼 객체는 iteration 프로토콜을 따르지 않기 때문 for..in 이라는 연산자는 사용 가능
  const obj = {0:1, 1:2};
for(const item in obj){
    console.log(item);
} 

const iterator = array.values();
/* for (const item of iterator) {
    console.log(item);
} */
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().done);
// 이것을 간단하게 쓰기
while(true){
    const item = iterator.next();
    if(item.done) break;
    console.log(item.value);
}