class User {
  getName() {
    console.log(this);
  }
}

class UserWithProperty {
  getName = () => {
    console.log(this);
  }
}

const user = new User();
user.getName();

const userWithProperty = new UserWithProperty();
userWithProperty.getName();