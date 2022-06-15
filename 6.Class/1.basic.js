//객체를 손쉽게 만들 수 있는 템플릿
//1.생성자함수(오래된 고전적인 방법)
//2. 클래스 (최신)


class Fruit {
    //생성자 : new 키워드로 객체를 생성할 때 호출되는 함수
    constructor(name, emoji) {
        this.name = name, // 해당객체를 뜻하는 this 붙여줘야해
        this.emoji = emoji;
    }
    display = () => {
        console.log(`${this.name} : ${this.emoji}`);
    };
}

//apple은 Fruit라는 클래스의 인스턴스이다. 
const apple = new Fruit('apple', '🍎')
//orange은 Fruit라는 클래스의 인스턴스이다. 
const orange = new Fruit('orange', '🍊')

console.log(apple);
console.log(orange);

console.log(apple.name);
console.log(apple.emoji);
apple.display();