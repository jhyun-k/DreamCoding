const obj = {
    name : '엘리',
    age : 20,
}
//코딩하는 시점에, 정적으로 접근이 확정됨
obj.name;
obj.age;

//동적으로 속성에 접근하고 싶을 때 대괄호 표기법 사용!!
function getValue(obj,key){
    return obj[key]; // 지금 이 key값에 뭐가 들어갈지 정해지지 않은 경우 이렇게 [] 를 쓴다
}
console.log(getValue(obj,'name')); // 엘리

function addKey(obj,key,value){
    obj[key]=value
}
addKey(obj,'job','engineer')
console.log(obj); //{ name: '엘리', age: 20, job: 'engineer' }

function deleteKey(obj,key){
    delete obj[key]
}
deleteKey(obj,'name')
console.log(obj);//{ age: 20, job: 'engineer' }