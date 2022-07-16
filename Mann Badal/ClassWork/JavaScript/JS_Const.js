const user = {
  // an object
  name: "joe",
  // by key 'name' store value 'joe'
  age: 20,
  //by key 'age' store value 20
  "has a dog": false,
  //multi word prop name 'has a dog' store value false
  "has a cat": true,
};
user.name= "Mann";
user.age= 30;
user['has a car'] = true;
delete user['has a dog'];

console.log(user);
