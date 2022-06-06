//return을 명시적으로 쓰지 않으면 자동으로 undefined이 반환됨

function add(a,b){
    // return a + b;
    return undefined;
}

const result = add(1,2)
console.log(result);

//return을 함수 중간에 쓰게 되면 함수가 종료됨
//사용예: 조건이 맞지 않는 경우 함수 도입부분에서 함수를 일찍이 종료함!

function print(num){
    if(num<0){
        return; // 원하는 조건이 아닐 때 함수를 종료하는 용도로 사용할 수 있다.
    }
    console.log(num);
}

print(12) //12 --> 얘는 >0 이라는 조건에 부합하니까 그대로 출력
print(-12) //undefined  --> 만약 print의 매개변수 num이 0 이하의 숫자를 받으면 바로 함수가 종료되어서 아무것도 console.log 되지 않고 즉시 return되는 것!