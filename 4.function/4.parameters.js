//매개변수의 기본값은 무조건 undefined
//매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨
//매개변수 기본값 default parameters a=1,b=3
function add(a=1,b=4){
    console.log(a);
    console.log(b);
    console.log(arguments[0]);
    return a + b
}
console.log(add(1,2)); 

//Rest 매개변수 rest parameters

function sum(a,b,...numbers){
    console.log(a);
    console.log(b);
    console.log(numbers);
}

sum(1,2,3,4,5,6)