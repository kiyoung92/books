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
function returnParams(input) {
    return input;
}
var numberGeneric = returnParams(1234); // Type: number
var stringGeneric = returnParams('hello'); // Type: string
function foo(callback) {
    return function (input) {
        console.log(input);
        callback(input);
    };
}
// Type: (input: string) => void
foo(function (input) {
    console.log(input);
});
