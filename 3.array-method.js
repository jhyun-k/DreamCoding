//배열의 함수들
//배열 자체를 변경하는지 새로운 배열을 반환하는지가 중요

const fruits = ['🍊','🍎','🍈','🍌']

//특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits)); //true
console.log(Array.isArray({})); //false

//특정한 아이템의 위치를 찾을 때
console.log(fruits.indexOf('🍎')); //1

// 배열 안에 특정한 아이템이 있는지 체크
console.log(fruits.includes('🍎')); // true

//추가 - 제일 뒤에다가
fruits.push('🍕') //배열 자체를 수정(업데이트)
console.log(fruits);
//추가 - 제일 앞
fruits.unshift('🍮')//배열 자체를 수정(업데이트)
console.log(fruits);

//제거 - 제일 뒤
let lastItem = fruits.pop() //배열 자체를 수정(업데이트)
console.log(fruits);
console.log(lastItem);// 제거된 아이템이 lastItem에 할당됨

//제거 - 제일 앞
lastItem = fruits.shift() //배열 자체를 수정(업데이트)
console.log(fruits);
console.log(lastItem); // 제거된 아이템이 lastItem에 할당됨

