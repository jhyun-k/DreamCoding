//static 정적 프로퍼티, 메소드



class Fruit {
    static Max_FRUITS=4;
    //생성자 : new 키워드로 객체를 생성할 때 호출되는 함수
    constructor(name, emoji) {
        this.name = name, // 해당객체를 뜻하는 this 붙여줘야해
        this.emoji = emoji;
    }

    //클래스 레벨의 메서드
    static makeRandomFruit(){
        return new Fruit('banana','🍌')
        //클래스 레벨의 메서드에서는 this를 참조할 수 없음
    }
    //인스턴스 레벨의 메서드
    display = () => {
        console.log(`${this.name} : ${this.emoji}`);
    };
}

const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(Fruit.Max_FRUITS);

/* console.log(Fruit.name);
Fruit.display(); 이렇게는 못해 인스턴스 레벨의 프로퍼티와 메소드는 생성된 인스턴스를 통해 접근하고 호출해야한다. */

//apple은 Fruit라는 클래스의 인스턴스이다. 
const apple = new Fruit('apple', '🍎')
//orange은 Fruit라는 클래스의 인스턴스이다. 
const orange = new Fruit('orange', '🍊')

console.log(apple);
console.log(orange);

console.log(apple.name);
console.log(apple.emoji);
apple.display();

Math.pow();
Number.isFinite(1);