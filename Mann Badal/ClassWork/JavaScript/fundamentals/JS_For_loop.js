/*const user = { name: "john" };
const anotherUser = Object.create(user);
anotherUser.age = 15;
anotherUser.height = '180cm';
for (const key in anotherUser) {
  console.log(key); // age, name
}
console.log(`Another user Name: ${anotherUser.name}`);

console.log(anotherUser); */

//changing username
/*const user = { name: "john" };
const admin = user;
admin.name = "Jesse"; // changed by the 'admin' reference
console.log(user.name); // 'Jesse', changes are seen from the 'user' reference */

//Cloning
/*const user = {
  name: "john",
  age: 30,
};
const clone = {}; //empty object as place holder, let's copy all user properties into it
for (const key in user) {
  clone[key] = user[key];
}

console.log(clone); */

//Deepclone
/*var cloneDeep = require('clonedeep');

const box = {
  weight: "20kg",
  dimensions: {
    height: "0cm",
    width: "10cm",
  },
};
const anotherClonedBox = cloneDeep(box);
box.dimensions === anotherClonedBox.dimensions; // false, means it is not a reference

console.log(anotherClonedBox);


console.log('Compairing original height with anotherClonedBox', box.height === anotherClonedBox.height); */

//Objest Method
/*const user = {
  name: "John",
  age: 30,
  sayHi() {
    console.log(this.name); // 'this' is the current object
  },
};
user.sayHi(); // John */

//Object generation
class User {
  isAdmin = true;
  constructor(name) {
    this.name = name;
  }
}
const user = new User("Jack");
console.log(user.isAdmin); //true
console.log(user.name); //Jack
