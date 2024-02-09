## 10. 제네릭

타입스크립트는 `제네릭`을 사용해 타입 간의 관계를 알 수 있음

### 학심 한 줄 요약

</br></br>

### 제네릭 함수

매개변수 괄호 바로 앞에 화살표 괄호 (`< >`)로 묶인 타입 매개변수에 별칭을 배치해 함수를 제네릭으로 만들 수 있음.

```typescript
function returnParams<T>(input: T) {
  return input;
}

const numberGeneric = returnParams(1234); // Type: number
const stringGeneric = returnParams('hello'); // Type: string
```

</br>

#### 명시적 제네릭 호출 타입

해당 타입 인수가 무엇인지 명시적으로 알려주는 `명시적 제네릭 타입 인수`

```typescript
function foo<T>(callback: (input: T) => void) {
  return (input: T) => {
    console.log(input);
    callback(input);
  }
}

// Type: (input: string) => void
foo<string>(input => {
  console.log(input)
})
```

</br>

#### 다중 함수 타입 매개변수

임의의 수의 타입 매개변수를 쉼표로 구분해 함수를 정의  
타입 매개변수를 선언하고 입력된 값을 읽기 전용 튜플로 반환

```typescript
function getTuple<Foo, Bar>(first: Foo, second: Bar) {
  return [first, second] as const;
}

// readonly [boolean, string] 타입
let tuple = getTuple(true, 'hello');
```

</br></br>

### 제네릭 인터페이스

```typescript
interface User<T> {
  name: T;
}

const getUsername: User<string> = {
  name: 'hello',
}
```

</br>

타입스크립트 내장 Array 메서드에 제네릭 인터페이스로 정의 가능

```typescript
interface Array<T> {
  pop(): T | undefined;
  push(...items: T[]): number;
}
```

</br>

#### 유추된 제네릭 인터페이스 타입

제네릭 인터페이스의 타입 인수는 사용법마다 유추할 수 있음

```typescript
interface User<T> {
  name: T;
  address?: User<T>;
}

function getUser<T>(params: User<string>): T {
  return params.address ? getUser(params.address) : params.name;
}

// 유추된 타입 인수: string
let getName = getUser({
  name: 'hello',
})

// 유추된 타입 인수: number
let getUserInfo = getUser({
  name: 123,
  address: {
    name: 456,
  }
})
```

</br></br>

### 제네릭 클래스

클래스의 각 인스턴스는 타입 매개변수로 각자 다른 타입 인수 집합을 가짐

```typescript
class Secret<Key, Value> {
  key: Key;
  value: Value;

  constructor(key: Key, value: Value) {
    this.key = key;
    this.value = value;
  }

  getValue(key: Key): Value | undefined {
    return this.key === key ? this.value : undefined;
  }
}

const storage = new Secret(12345, 'helloWorld');
storage.getValue(12345);
```

</br>

#### 명시적 제네릭 클래스 타입

클래스 타입 인수를 유추할 수 없는 경우 타입 인수의 기본값은 `unknown`.  
명시적 타입 인수를 제공하여 기본값이 `unknwon`이 되는 것을 피할 수 있음.

```typescript
class User<T> {
  #callback(input: T) => void;

  constructor(callback: (input: T) => void) {
    this.#callback = (input: T) => {
      console.log('T:', input);
      callback(input);
    }
  }

  call(input: T) {
    this.#callback(input);
  }
}

new User((input: string) => {
  console.log(input.length);
});

new User((input) => {
  console.log(input.length); // unknown 타입이기 때문에 에러
})
```

</br>

#### 제네릭 클래스 확장

제네릭 클래스는 상속 받는 클래스(기본 클래스)로 사용할 수 있음

```typescript
class User<T> {
  name: T;

  constructor(name: T) {
    this.name = name;
  }
}

class People extends User<string[]> {
  logUsers() {
    console.log(this.name.join('\n'));
  }
}

new User('hello').name; // Type: string
new User(12345).name; // Type: number

new People(['hello', 'world']).name;; // Type: string[]



class Parent<T> {
  name: T;

  constructor(name: T) {
    this.name: name;
  }
}

// 파생 클래스에서 기본 클래스로 타입 전달
class Child<T> extends Parent<T> {
  address: string

  constructor(name: T, address: string) {
    super(name);
    this.address = address;
  }
}

new Child('hello', 'address');
```

</br>

#### 제네릭 인터페이스 구현

</br></br>

### 새로 알게된 점

</br></br>

### 참고