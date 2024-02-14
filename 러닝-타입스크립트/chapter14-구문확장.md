## 14. 구문 확장

### 학심 한 줄 요약

</br></br>

### 클래스 매개변수 속성

클래스를 많이 사용하는 프로젝트나 클래스 이점을 갖는 프레임워크가 아니라면 클래스 매개변수 속성을 사용하지 않는 것이 좋음

```typescript
class Foo {
    readonly area: string;

    constructor(area: string) {
        this.area = area;
    }
}

new Foo('hello').area; // Type: string
```

</br>

타입스크립트는 이러한 종류의 `매개변수 속성`을을 선언하기 위한 단축 구문을 제공  
생성자의 매개변수 앞에 `readonly`, `public`, `protected`, `private` 제한자 중 하나를 배치하면 타입스크립트가 동일한 이름과 타입의 속성도 선언하도록 지시

```typescript
class Foo {
    constructor(readonly area: string) {
        console.log(area);
    }
}

new Foo('hello').area; // Type: string
```

```typescript
class Foo {
    // 일반 속성
    name: string;
    
    // name: 일반 매개변수, area: 매개변수 속성
    constructor(name: string, public area: string) {
        this.name = `${name} ${area}`;
    }
}
```

</br>

명시적으로 할당

```typescript
class Foo {
    name: string;
    area: string;

    constructor(name: string, area: string) {
        this.name = name;
        this.area = `${name} ${area}`;
    }
}
```

</br></br>

### 실험적인 데코레이터

ECMAScript에서 아직 데코레이터는 정상 승인되지 않았으므로 타입스크립트 버전 4.7.2에서는 기본적으로 데코레이터를 지원하지 않음 (현재 stage2 단계)

```typescript
@MyDecorator
class MyClass {  }
```

</br>

`experimentalDecorators` 옵션을 사용하여 데코레이터를 활성화할 수 있음

```json
{
    "compilerOptions": {
        "experimentalDecorators": true
    }
}
```

</br>

데코레이터의 각 사용법은 데코레이팅하는 엔티티가 생성되자마자 한번 실행  
각 종류의 데코레이터(접근다, 클래스, 메서드, 매개변수, 속성)는 데코레이팅하는 엔티티를 설명하는 서로 다른 인수 집합을 받음

```typescript
function logOnCall(target: any, key: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    console.log('First call', target.constructor.name);

    descriptor.value = function(...args: unknown[]) {
        console.log('Second call', key);

        return original.apply(this, args);
    }
}

class Greeter {
    @logOnCall
    greet(message: string) {
        console.log('Last call', message);
    }
}

new Greeter().greet('hello');

// First call 'Greeter'
// Second call 'hello'
// Last call 'hello'
```

</br></br>

### 열거형

자주 반복되는 리터럴 집합이 있고, 그 리터럴 집합을 공통 이름으로 설명할 수 있으며, 열거형으로 전환했을 때 훨씬 더 읽기 쉽지 않은 경우라면 열겨형을 사용하면 안됨

타입스크립트는 타입이 `number` 또는 `string`인 리터럴 값들을 갖는 객체를 생성하기 위한 `enum` 구문을 제공

```typescript
enum StatusCode {
    InternalServerError = 500,
    NotFound = 404,
    Ok = 200,
}

StatusCode.InternalServerError; // 500

let statusCode: StatusCode;

statusCode = StatusCode.Ok;
statusCode = 200;

// enum StatusCode의 자바스크립트 코드로 컴파일
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["InternalServerError"] = 500] = "InternalServerError";
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["Ok"] = 200] = "Ok";
})(StatusCode || (StatusCode = {}));
```

- 열거형은 `Tree-shaking(사용하지 않는 코드를 삭제하는 기능)`이 되지 않아 `Union Types`를 사용하거나 `const enum`등 을 사용하는 것이 좋음

</br>

#### 자동 숫잣값

열거형의 멤버는 값이 생략되면 첫번째 값을 0으로 시작하고 후속 값을 1씩 증가시킴

```typescript
enum VisualTheme {
    Dark, // 0
    Light, // 1
    System, // 2
}

// Top 멤버의 값이 1이라면 나머지 멤버의 값은 2, 3으로 증가
enum Direction {
    Top = 1,
    Right, // 2
    Bottom, // 3
    Left, // 4
}
```

</br>

#### 문자열 값을 갖는 열거형

열거형은 멤버롤 숫자 대신 문자열을 사용할 수 있음

```typescript
enum StatusCode {
    InternalServerError = 'Internal Server Error',
    NotFound = 'Not Found',
    Ok = 'Ok',
}
```

</br>

#### const 열거형



### 새로 알게된 점

</br></br>

### 참고