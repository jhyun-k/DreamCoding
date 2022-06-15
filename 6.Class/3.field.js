//접근제어자 - 캡슐화
//public(기본) private(#)
//클래스 내부에서만 사용하는 함수나 메서드가 있으면 #을 붙여서 제어 가능
class Fruit {
    #name;
    #emoji;
    #type = '과일';
    constructor(name, emoji) {
        this.#name = name, 
        this.#emoji = emoji;
    }
    display = () => {
        console.log(`${this.name} : ${this.emoji}`);
    };
}


const apple = new Fruit('apple', '🍎')
console.log(apple);