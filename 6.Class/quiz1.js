//카운터를 만들기
//0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 카운터 만들기
//Counter 클래스


class Counter {
    #value;
    constructor(startValue) {
        if (isNaN(startValue) || startValue < 0) {
            this.#value = 0;
        } else {
            this.#value = startValue
        }
    }
    get value() {
        return this.#value
    }
    increment = () => {
        this.#value++;
    }
}

const counter = new Counter(3);
counter.increment()
console.log(counter.value);
counter.increment()
console.log(counter.value);
