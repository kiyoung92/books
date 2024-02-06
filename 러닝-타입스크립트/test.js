// class User {
//   getName() {
//     console.log(this);
//   }
// }
function isStandupComedian(value) {
    console.log('routine' in value);
    return 'routine' in value;
}
isStandupComedian({ funny: true });
