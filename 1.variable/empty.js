//null, undefined

let variable;
console.log(variable);

variable = null;

console.log(variable);

let activeItem ; // 아직 활성화된 아이템이 있는지 없는지 모르는 상태!
activeItem = null; // 활성화된 아이템이 없는 상태!

console.log(typeof 123); // number
console.log(typeof '123'); // string
console.log(typeof null); // object -> null이라는 object가 할당됨
console.log(typeof undefined); // undefined

// undefined는 정해지지 않은 상태, null은 확실히 비어있다고 정해진 상태