// class User {
//   getName() {
//     console.log(this);
//   }
// }

// class UserWithProperty {
//   getName = () => {
//     console.log(this);
//   }
// }

// const user = new User();
// user.getName();

// const userWithProperty = new UserWithProperty();
// userWithProperty.getName();


// function test(name: unknown) {
//   if (typeof name === 'string') {
//     console.log(`${name.toUpperCase()}`)
//   } else {
//     console.log('wrong');
//   }
// }

// test({});

// class Foo {
//   name: string;

//   constructor(name: string) {
//       this.name = name;
//   }
// }

// function checkFoo(name: unknown) {
//   if (name instanceof Foo) {
//       console.log(name);
//   } else {
//       console.log('wrong');
//   }
// }

// checkFoo(new Foo('hello'));
// checkFoo('wrong');



// function isNumberOrString(value: unknown): value is number | string {
//   const arr = ['number', 'string']
//   const types = typeof value;
  
//   return arr.includes(types);
// }

// isNumberOrString(1);


// interface Comedian {
//   funny: boolean;
// }

// interface StandupComedian extends Comedian {
//   routine: string;
// }

// function isStandupComedian(value: Comedian): value is StandupComedian {
//   console.log('routine' in value);
  
//   return 'routine' in value;
// }

// isStandupComedian({ funny: true })

function returnParams<T>(input: T) {
  return input;
}

const numberGeneric = returnParams(1234); // Type: number
const stringGeneric = returnParams('hello'); // Type: string


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

enum StatusCode {
  InternalServerError = 500,
  NotFound = 404,
  Ok = 200,
}

let statusCode: StatusCode;
statusCode = StatusCode.Ok;
statusCode = 200;

// 책에서는 열거형 값에 임의의 숫자를 할당해도 코드 스니펫에서 허용된다고 하는데 허용되지 않음
// statusCode = -1;