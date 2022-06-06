//퀴즈
let num = 2;
//num의 숫자가 짝수이면 👍, 홀수라면 👎를 출력하도록 
//if문
if(num % 2 === 0){
    console.log('👍');
}else{
    console.log('👎');
}

//tenary문으로 표현하기
num % 2 === 0 ? console.log('👍') : console.log('👎');

// let emoji = num % 2 === 0 ? '👍' : '👎';  하고 console.log(emoji) 하면 더 간결하게 표현 가능