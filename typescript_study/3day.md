### Class 에 대해서

```js

class Person {
  // 생성자 초기화 메서드.
  constructor(
    
  )
}

```

new Person();

java와 같아서 딱히 어려운 부분은 없었다.

사용하는 방법은 마찬가지로 인스턴스를 제공하기 위함이겠지만 이 부분이 자바처럼 인스턴스를 너무 많이 생성하게 되면 메모리사용을 과도하게 사용하는지 궁금해졌다.
물론 자바에서 엄청 많은 부분을 차지하는 것은 아니기 때문에 DTO 생성 관련에 대해서 크게 생각하지 않지만 만약 같은 동작을 하고 싱글톤으로 만들어도 되는 부분을 다른 인스턴스로 무한히 제공한다면 문제가 된다고 생각한다.

+ readonly 라는 특이한 접두가 있는데 접근만 가능하도록 한 것이다. DB의 readonly와 비슷한 것 같다.



### Prototype

자바의 상속과 같은 맥락으로 생각하면 될 것 같다.

abstract.

const user = {name: 'capt' , age: 100};
admin.__proto__ = user;
이라면 admin은 user에게 상속받아서 사용할 수 있다는 의미.
이 상태에서 admin.role = 'admin'; 을 선언한다면 속성을 추가할 수 있다.

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object

```ts
const obj = {a: 10};
Object.keys(obj);
["a"];

```

객체 정보들을 재사용.

function 형태의 class

```js

function Person(name, age) {
  this.name = name;
  this.age = age;
}

new Person('캡틴', 100);
```

기존 방식 예전 방식. 

react 도 펑션형태로 변환된 것처럼.

new Vue({
  setup(){
  
  }
})

방식을 통해 vue도 클래스형태를 많이 못 본다.


#### 제네릭


```ts

function logText<T>(text: T) :T {

  return text;
}

logText<string>('hi');

```

제네릭으로 매개변수의 타입을 지정해준다.

자바는 매개변수가 아니라 반환 값에 대한 제네릭을 해주는 위치인데 다른 것 같다 그 부분이.

### 유니온 타입에 따른 문제

```ts
function logText(text: string | number) {
  return text;
}

const a = logText('a);

```
일 때 a의 타입이 string | number 이기 때문에 split, join과 같은 string type에 대한 메소드를 사용하기 번거롭다.

 logText<T>(text: T) :T  제네릭을 통해 <string> 으로 지정 해준다면 쉽게 사용 가능하고 타입을 추론하기에 좋다.

 아래 예시를 보면


 ```ts
//배열 object[] 이지만 object를 제대로 명시해야한다.
const emails:{value: string , selected: boolean}[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

const numberOfProducts:{value: number , selected: boolean}[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

function createDropdownItem(item: {value: number , selected: boolean}) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem(email);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
});

```


  const item = createDropdownItem(email); email이 string 임으로 number 타입으로는 매개변수의 타입을 정할 수 없다.


interface 변환 및 유니온 타입을 사용하면 에러를 잡는다.

```ts

interface Email {
  value: string , selected: boolean
}

interface Product {
  value: number , selected: boolean
}

//배열 object[] 이지만 object를 제대로 명시해야한다.
const emails: Email[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

const numberOfProducts: Product[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

function createDropdownItem(item: Email | Product ) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem(email);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
});
```
가능 하지만 확장성이 내려간다 예를 들면

```ts
interface isTrust {
  value: boolean , selected: boolean
}

```

라는 것이 추가 된다면? 메소드에도 수정을 가해야한다는 단점이 존재한다.
즉 변경에 닫혀있지 못하다.

따라서 제네릭을 활용해서 타입을 넘겨주도록 설계하면

```ts


interface Email {
  value: string , selected: boolean
}

interface Product {
  value: number , selected: boolean
}

interface isTrust {
  value: boolean , selected: boolean
}

interface Value<T> {
  value: T,
  selected: boolean
}

//배열 object[] 이지만 object를 제대로 명시해야한다.
const emails: Value<string>[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

const numberOfProducts: Value<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];


function createDropdownItem<T>(item: Value<T>):HTMLOptionElement {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem<string>(email);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
});

numberOfProducts.map( (product) => {
  const item = createDropdownItem<number>(product)
})
```

여기에 배열이라는 것만 제공되도록 하고 싶다면 타입제한을 배열로 걸면된다.




