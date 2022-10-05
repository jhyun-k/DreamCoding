// Spread 연산자, 전개구문
// 모든 Interable은 Spread 될 수 있다.
// 순회가 가능한 모든 것들은 촤르르륵 펼쳐질 수 있다.
// func(...iterable)
// [...iterable]
// {...obj}
// EcmaScript 2018

function add (a,b,c){
    return a+b+c
}

const nums = [1,2,3];
console.log(add(...nums));

// Rest parameters
function sum(first, second, ...nums){
    console.log(nums);
}
sum(1,2,0,1,2,4);

// Array Concat
const fruit1 = ['apple','kiwi'];
const fruit2 = ['berry','banana'];
let arr = fruit1.concat(fruit2)
console.log(arr);
arr = [...fruit1,'orange',...fruit2];
console.log(arr);

// Object
const jihyun = {name:'jihyun' , age:26, home:{address:'home'}};
const updated = {
    ...jihyun,
    job : 'Fe develop',
    home : 'none'
}
console.log(jihyun);
console.log(updated);
console.log(jihyun.home);
console.log(updated.home);