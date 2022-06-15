//접근자 프로퍼티 (Accessor Property)

class Student {
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName(){
        return `${this.lastName} ${this.firstName}`
    }
    set fullName(value){
        console.log('set',value);
    }
}

const student = new Student ('수지','김');
student.firstName = '안나'
console.log(student.firstName);
console.log(student.fullName); //접근할 때는 get함수가 호출된다
student.fullName = '김철수' // 할당할 때는 set함수가 호출된다

console.log(student);

