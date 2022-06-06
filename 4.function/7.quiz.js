//주어진 숫자만큼 0부터 순회하는 함수
//순회하며서 주어진 특정한 일을 수행해야함
// 5, 순회하는 숫자를 다 출력하고 싶음
// 5, 순회하는 숫자의 두배값을 다 출력하고 싶음
// fuction iterate(max,action)

//내 답 --> 쓸 데 없이 for문 두 번 씀...

/* 
const all = function(max){
   for(let i = 1;i<=max;i++){
       console.log(i);
   }
}
const double = function(max){
    for(let i = 1;i<=max;i++){
        console.log(i*2);
    }
    
}
const iterate = (max,action) =>{
    let result = action(max);
    return result;
}

console.log(iterate(5,all));
console.log(iterate(5,double));

 */


// 선생님 답

function iterate(max,action) {
    for(let i = 0; i<max; i++){
        action(i);
    }
}
function log(num){
    console.log(num);
}
function doublelog(num){
    console.log(num*2);
}

iterate(3,log)
iterate(3,doublelog)

//훨씬 간결하네...ㅠㅠ

setTimeout(()=>{
    console.log('3초 뒤 함수 실행됩니다.');
},3000)