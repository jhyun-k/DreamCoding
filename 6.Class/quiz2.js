//정직원과 파트타임 직원을 나타낼 수 있는 클래스를 만들어보자
// 직원들의 정보 : 이름, 부서이름, 한 달 근무시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다
//정직원은 시간당10000원
//파트타임 직원은 시간당 8000원

class Staff {
    constructor(name,team,work){
        this.name=name,
        this.team=team,
        this.work=work
        
    }
}

class FullStaff extends Staff{
    constructor(name,team,work,money){
    super(name,team,work)
    this.money = work * 10000
    }
}

class PartStaff extends Staff{
    constructor(name,team,work,money){
        super(name,team,work)
        this.money = work * 8000
        }
    caculate() {
      return console.log(this.money); 
    }
}

const jh = new FullStaff('jh','FE',5)
console.log(jh);

const sally = new PartStaff('sally','BE',5)
sally.caculate()
/* jh는 정보 입력하고 log 하면 정보 다 뜨게, sally는 caculate함수 이용하면 money만 뜨게함 

결과:
FullStaff { name: 'jh', team: 'FE', work: 5, money: 50000 }
40000 
*/

//선생님 코드
class Employee {
    constructor(name,department,hoursPerMonth,payRate){
        this.name=name;
        this.department = department;
        this.hoursPerMonth = hoursPerMonth;
        this.payRate = payRate
    }
    caculatePay(){
        return this.hoursPerMonth * this.payRate;
    }
}

class FullTimeEmployee extends Employee {
    static PAY_RATE = 10000 // 이렇게 선언해서도 가능
    constructor(name,department,hoursPerMonth){
        super(name,department,hoursPerMonth,FullTimeEmployee.PAY_RATE)
    }
}

class PartTimeEmployee extends Employee {
    constructor(name,department,hoursPerMonth){
        super(name,department,hoursPerMonth, 80000)
    }
}

const ellie = new FullTimeEmployee('엘리','s/w',30)
const bob = new PartTimeEmployee('밥','s/w',30)

console.log(ellie.caculatePay());
console.log(bob.caculatePay());