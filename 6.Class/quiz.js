//카운터를 만들기
//0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 카운터 만들기
//Counter 클래스


class Counter {
    constructor(num){
        this.num = num
    }
    increase(){
        num +1
    }
}

const counter = new Counter(20)
console.log(counter);
