//set
const set = new Set([1,2,3]);
console.log(set);

//사이즈 확인
console.log(set.size);

// 존재하는지 확인
console.log(set.has(2)); //true
console.log(set.has(6)); //false

// 순회
set.forEach(item=>console.log(item));
for(const value of set.values()){
    console.log(value);
}

// 추가
set.add(6);
console.log(set);
set.add(6);
console.log(set); // set은 중복이 안돼 (배열은 중복가능)

//삭제
set.delete(6);
console.log(set);

// 전부 삭제
set.clear();
console.log(set);

//오브젝트 세트
const obj1 = {name : 'apple',price:8}
const obj2 = {name : 'banana',price:5}
const objs = new Set([obj1,obj2]);
console.log(objs);

//quiz 
obj1.price = 10;
objs.add(obj1);
console.log(objs); // 오브젝트는 shallow copy가 된다, size는 그냥 똑같이 2이고 price만 바뀜

//quiz
const obj3 = {name:'banana',price:5}
objs.add(obj3)
console.log(objs); // 3개 됨 내용은 모르고 참조주소만 보는 것이기 때문에 새로운 오브젝트로봄
obj3.price = 8;
console.log(objs);
