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

//중간에 삭제  splice(시작인덱스,삭제할 개수,추가할것)
let deleted = fruits.splice(1,1)
console.log(fruits); //배열 자체를 수정(업데이트)
console.log(deleted);

//중간 추가
fruits.splice(1,0,'🥂','☕')
console.log(fruits);

//잘라진 새로운 배열을 만듦
let newArr = fruits.slice(0,2) // 0부터 2까지 (0,1) 의 새로운 배열 만듦
console.log(newArr);
newArr = fruits.slice()//전체 다 나옴
console.log(newArr);
newArr = fruits.slice(1)//1부터
console.log(newArr);
newArr = fruits.slice(-1)//뒤에서부터
console.log(newArr);

//여러개의 배열을 붙여줌
const arr1 = [1,2,3]
const arr2 = [4,5,6]
const arr3 = arr1.concat(arr2)
console.log(arr3); // [1,2,3,4,5,6]

//배열을 순서를 거꾸로
const arr4 = arr3.reverse()
console.log(arr4); //  6, 5, 4, 3, 2, 1 ]

//중첩 배열을 하나의 배열로 쫙 펴기

let arr = [
    [1,2,3],
    [4,[5,6]],
];
console.log(arr); // [ 1, 2, 3 ], [ 4, [ 5, 6 ] ] ]
console.log(arr.flat()); // [ 1, 2, 3, 4, [ 5, 6 ] ]
console.log(arr.flat(2));//[ 1, 2, 3, 4, 5, 6 ]
arr = arr.flat(2)

//특정한 값으로 배열을 채우기
arr.fill(0) // 0으로 배열 채우기
console.log(arr); // [ 0, 0, 0, 0, 0, 0 ]

arr.fill('s',1,3) // s으로 배열 채우기 (1index부터) end index는 포함하지 않음
console.log(arr); //[ 0, 's', 's', 0, 0, 0 ]

arr.fill('a',1)
console.log(arr); //[ 0, 'a', 'a', 'a', 'a', 'a' ]

//배열을 문자열로 합하기
let text = arr.join();
console.log(text);
text = arr.join('|') //0,a,a,a,a,a
console.log(text); //0|a|a|a|a|a