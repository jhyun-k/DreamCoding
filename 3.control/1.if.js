//조건문 Conditional Statement
// if(조건){  }
// if(조건){  } else {  }
// if(조건1){  } else if(조건2) {  } else{ }

let fruit = 'orange'

if(fruit === 'apple'){
    console.log('🍎');
    let a = 1
    console.log(a);
}else if(fruit === 'orange'){
    console.log('🍊');
}else {
    console.log('🍈');
}

if(2<1){ // if 안 조건문이 true 면 출력되는 것이기 때문에 출력되지 않길 바라면 0,'',undefined 등 논리값이 false 인 값을 넣어주면 된다.
    console.log('출력되면 안됨');
}