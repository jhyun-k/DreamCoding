//함수 내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 안돼~~
// 상태의 변경이 필요한 경우, 새로운 상태를 (오브젝트, 값)을 만들어서 반환해야 한다.
// b/c 원시값은 값에 의한 복사
// 객체값은 참조에 의한 복사 (메모리주소)

function display(num){
    num = 5; // 좋지않아요 재할당하지마라
    console.log(num);
}

const value = 4;
display(value); //5 
console.log(value); //4 원시값은 전달될 때 값에 의해 복사


function displayObj(obj){
    obj.name = 'bob' // 정말 나쁜짓 외부로부터 주어진 인자(오브젝트)를 내부에서 변경하면 안돼❌❌❌❌❌
    console.log(obj);
}

const ellie = {name:'Ellie'};
displayObj(ellie)
console.log(ellie);
function chagneName(obj){
    return{...obj,name: 'bob'}; //함수 내부에서 무언가 바꿔야 한다면 함수 이름부터 변경한다는 느낌을 주도록! 반환할 때는 새로운 오브젝트 만들기
}