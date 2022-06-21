/* class Tiger {
    constructor(color){
        this.color = color;
    }
    eat(){
        console.log('먹자!');
    }
    sleep(){
        console.log('잔다');
    }
}

class Dog {
    constructor(color){
        this.color = color;
    }
    eat(){
        console.log('먹자!');
    }
    sleep(){
        console.log('잔다');
    }
    play(){
        console.log('논다');
    }
} */

class Animal {
    constructor(color){
        this.color = color;
    }
    eat(){
        console.log('먹자!');
    }
    sleep(){
        console.log('잔다');
    }
}

class Tiger extends Animal{}

const tiger = new Tiger('노랑이')
console.log(tiger);

tiger.sleep();
tiger.eat()

class Dog extends Animal{
    constructor(color,ownerName){
        super(color); //super는 상속하고 있는 부모를 가리킨다
        this.ownerName = ownerName;
    }
    play(){
        console.log('놀자');
    }
    //오버라이딩 부모요소에 있는 함수를 자식 클래스에서 덮어씌우는것 자식에서 그 함수를 그대로 선언해서 다른 행동을 구현하면 된다.
    eat(){
        super.eat() // 부모요소의 eat함수인 '먹자!'출력
        console.log('강아지가 먹는다');
    }
}

const dog =new Dog('빨강이')
console.log(dog);
dog.play()
dog.eat()