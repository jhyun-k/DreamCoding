//삼항조건연산자 (Tenary operator)
// 조건식 ? 참인경우 : 거짓인경우

let fruit = 'orange'

if(fruit === 'apple'){
    console.log('🍎');
    let a = 1
    console.log(a);
}else if(fruit === 'orange'){
    console.log('🍊');}

fruit === 'apple' ? console.log('🍎') : console.log('🍊');

let emoji = fruit === 'apple' ? '🍎' : '🍊';
console.log(emoji);