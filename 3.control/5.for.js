//반복문 Loop Statement
//for(변수선언문;조건식;증감식){  }
//실행순서 :
//1. 변수선언문
//2. 조건식 값이 참이면 { } 코드블럭 수행
//3. 증감식 수행
//4. 조건식이 거짓이 될 때 까지 2,3번 반복

for(let i = 0;i<5;i++){
    console.log(i);
}

console.clear();

for(let i = 0;i<5;i++){
    for(let j = 0; j<5;j++){
        console.log(i,j);
    }
}

//무한루프
/* for(;;){
    console.log();
} */

for(let i = 0; i<20; i++){
    if(i === 10){
        console.log('i가 드디어 10됨');
        continue; // 아래 코드 무시하고 반복문 계속
        break; // 반복문 그만
    }
    console.log(i);
}
