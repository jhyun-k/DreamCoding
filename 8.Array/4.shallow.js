// 얕은 복사 Shallow Copy - 객체는 메모리 주소 전달
//자바스크립트에서 복사할 때는 항상 얕은 복사가 이뤄짐!
//Array.from , concat , slice, spread(...) , Object.assign
const pizza = {name: '🍕',price:2, owner: {name : 'kim'}}
const ramen = {name: '🍜',price:3}
const sushi = {name: '🍣',price:1}

const store1 = [pizza,ramen];
const store2 = Array.from(store1)

console.log('store1',store1);
console.log('store2',store2);

store2.push(sushi);
console.log('store1',store1);
console.log('store2',store2);

pizza.price = 4;
console.log('store1',store1);
console.log('store2',store2);

// object는 메모리주소가 전달되는 것이기 때문에 오브젝트를 다른곳에서 수정하면 오브젝트를 가지고 있는 모든 배열에 수정사항이 반영됨