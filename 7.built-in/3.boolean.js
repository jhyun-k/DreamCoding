//Boolean

const isTrue = true //new Boolean(true)
console.log(isTrue.valueOf());

/* 
데이터 타입에서 거짓이 되는 값
0
-0
null
NaN
undefined
''
*/

/* 
데이터 타입에서 참이 되는 값 (0이 아닌값)
1 
-1
'0' 안에 뭐가 있든 '' 로 감싸져 있으면 문자열이기 때문에 true
'false' 안에 뭐가 있든 '' 로 감싸져 있으면 문자열이기 때문에 true
[] 
{} 아무것도 안들어있어도 오브젝트 자체가 값이기 때문에 true
*/