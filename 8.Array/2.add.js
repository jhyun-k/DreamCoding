const fruits = ['🍊','🍎','🍈','🍌']

//배열 아이템을 참조하는 방법

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length); //4 

for(let i =0;i<fruits.length;i++){
    console.log(fruits[i]);
}

//추가, 삭제 中 좋지않은 방식 
//const fruits = ['🍊','🍎','🍈','🍌']

fruits[6] = '🍰' // 이러면 인덱스 몇개인지 어떻게 알겨, 인덱스로 접근하는건 좋지 않아
fruits[fruits.length]= '💝'
console.log(fruits);

delete fruits[1]
console.log(fruits); // 이렇게 삭제하면 중간에 빈칸이 남아있어

