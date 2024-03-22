### 정의된 타입으로 타입을 제한 extends 상속을 통한 제한

```ts
function logTextLength<T>(text: T[]): T[] {
  text.forEach((text)=> {
    console.log(text)
  });
  return text;
}
interface LengthType {
  length: number;
}

function logTextLength2<T extends LengthType>(text: T): T {
  text.length;
  return text;
}

```

즉  string 이라는 js 객체가 제공하는 length 를 인터페이스로 선언해서 반드시 필요하다고 정의 해주면 그 것을 하위 메서드로 가지고 있는 객체들만 매개변수로 사용이 가능하다.


### key of 를 통한 타입제한

```ts
interface ShoppingItems {
  name: string;
  price: number;
  address: string;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItems>(itemOption: T): T{
  return itemOption;
}

getShoppingItemOption('name');
```

enum과 다른 것이 무엇이지 실무에서 테스트해봐야할 것 같다 이 부분은.


### 타입 추론


```ts
var a = 'a';

function logA(a = 'a') {
  var b = 10;
  return b;
}

interface Dropdown<T> {
  value: T
  title: string;
}
var items: Dropdown<number> = {
  value: 10,
  title: 'a'
}

interface DetailedDropdown<T> extends Dropdown<T> {
  description: string;
  tag: T;
}
var detailItems: DetailedDropdown<number> = {
  value: 1,
  title: 'a',
  description: 'b',
  tag: 2
}

```

