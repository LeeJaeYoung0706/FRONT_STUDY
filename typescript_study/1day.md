## TypeScript JsDoc Property

JSDoc 을 통해서 IDE에서 매개 변수 값을 쉽게 알 수 있도록 할 함.
```
/**
* @returns {Promise<User>}
*/
 function
```
위와 같은 상황일 때 
/**
* @typedef {object} User
* @property {string} name
*/
이러한 형식으로 property 를 정의하고 IDE가 추천 변수로 사용 가능 하도록 보여준다.
def 라는 것을 모르고 사용했기 때문에 리팩토링을 다 진행해야겠습니다...
정말 기초적으로 실무에 필요한 부분들이 많이 부족한 상태에서 개발을 진행했던 것이 아닌가 싶습니다.

## TypeScript Init

```
PS C:\Users\qaz77\WebstormProjects\untitled> node -v
v18.18.0
PS C:\Users\qaz77\WebstormProjects\untitled> npm i typescript -g

added 1 package in 1s
PS C:\Users\qaz77\WebstormProjects\untitled> tsc index.ts
```

### basic

```
// 문자열
let str: string = 'hello';
// 상수 문자열
const CON_STR: "hello" = 'hello';
// 숫자
let num: number = 1;
// 배열
let arr: number[] = [1, 2];
let arr2: Array<Number> = [1, 2, 3];
// 튜플
let address: [string, number] = ['a' , 100];
// 객체
let obj: object = {};
let person: object = {
  name: 'capt',
  age: 100
}
let person2: {name: string, age: number} = {
  name: 'string',
  age: 20
}
// 진위 값
let show: boolean = false;

```
