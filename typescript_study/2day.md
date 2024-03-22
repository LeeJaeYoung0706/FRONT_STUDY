### 함수

```ts
function fetchTodoItems(): {id: number, title: string} {
  const todos = [
        {id: 1, title: 'test1'},
        {id: 2, title: 'test2'},
        {id: 3, title: 'test3'}
  ];
  return todos;
}

```

라는 것이 있을 때 오브젝트 리턴을 하드코딩형식으로 내보내는 것이 가시성이 좋을지 의문이다.
예전에 개발할 때는 인터페이스로 처리해서 가시성이 좋게 했었는데, 인터페이스를 내리는 것이 올바를까 인터페이스가 맞을까..

인터페이스

```ts
interface Todo {
  id: number;
  title: string;
}
function fetchTodoItems(): Todo {
  const todos = [
        {id: 1, title: 'test1'},
        {id: 2, title: 'test2'},
        {id: 3, title: 'test3'}
  ];
  return todos;
}

```

가시성이 확실히 좋아졌다.

인자에 대한 타입을 지정할 때 interface를 사용하는 것이 올바르다.
즉, React Component 에 넣을 인자는 interface 가 올바른 것이 맞다.
그리고 API 호출에 대한 결과 값을 interface로 지정해서 올바른 값이 HTTP 요청으로 반환 되었는지 체크하기 위함.

함수형 인터페이스 선언

```ts
interface function {
  (a: number, b: number): number;
}
```
이런 식으로 함수 인자에 대한 인터페이스 선언을 해서 반환 값 및 인자 값에 대한 타입 제한을 할 수 있다.


어레이 인덱싱 인터페이스

```ts
interface StringArray {
  [index: number]: string
}

```
이런 형식으로 어레이에 대한 인덱싱 반환 값을 처리할 수 있다.

딕셔너리 패턴 

```ts

interface StringRegexDictionary {
  [key: string]: RegExp;
}

const obj: StringRegexDictionary = {
  file: /\.css$/
}
```

key 형태를 사용해서 변수 값의 타입을 지정하는 부분은 많이 사용했기 때문에 다시 한 번 돌아보는 느낌이였다.

인터페이스 상속

```ts

interface ReactNode {
 children: Raect.Node
}

interface ReactChildrenComponent extends ReactNode{
  text: string
}

```

상속의 개념은 쉽게 쓰지만 만약에 위의 

```ts

interface ReactNode {
 children: Raect.Node | React.Node[]
}

```

라면 상속 받을 때 확정적으로 다시 한번 선언하는 것이 올바른지 그냥 사용해도 되는지 의문이다. 

유니온 타입, 인터섹션 예제를 보면

```ts

interface Developer {
    name: string,
    skill: string;
}

interface Person {
  name: string,
  age: string
}

function askSomeone(someone: Developer | Person) {
  // 공통된 속성인 name 만 접근 가능
  someone.name
  // 타입 가드를 설정한다면 접근 가능
  if (type of someone//
}

function askSomeone(someone: Developer & Person) {
  // 모두 만족해야 가능하기 때문에 보장이 가능.
  someone.name
  someone.skill
  someone.age
}
즉 합집합
{name: string , skill: string, age: string}
````

이넘

```ts
enum Shoes {
  Nike = '나이키',
  Adidas = '아디다스'
}

타입을 고정적으로 사용할 때 좋음 자바에서는 초기에 생성됨으로 메모리 관리에 효율적이다.

```
