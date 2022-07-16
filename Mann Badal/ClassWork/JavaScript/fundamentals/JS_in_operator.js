const user = { name: "John", age: 30 };
"age" in user; // true, user.age exists
"blabla" in user; // false, user.blabla doesn't exist

const anotherUser = Object.create(user);
anotherUser.age = 15;
"name" in anotherUser; //true, anotherUser.name exists
"blabla" in anotherUser;

console.log(anotherUser.blabla);

console.log("name" in anotherUser);