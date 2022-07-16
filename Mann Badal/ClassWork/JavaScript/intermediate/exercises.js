//primitive as an object
/*const n = 1.23456;
n.toFixed(2); // 1.23, an object wrapper for number with method `toFixed()`
const str = "hello world";
str.toUpperCase() === new String(str).toUpperCase(); // we can explicitly create a wrapper
console.log(new String(str).toUpperCase()); */

//String-like Object
/*const user = {
  name: "John",
  toString() {
    return this.name;
  },
};
console.log("hello " + user); // hello John */

//Number-like Object
/*const apple = {
  price: 100,
  valueOf() {
    return this.price;
  },
};
console.log(apple * 3); //300 */

// adaptive number-like/string-like Object
/* const user = {
  name: "John",
  money: 1000,
  [Symbol.toPrimitive](hint) {
    return hint === 'string' ? `{name: '${this.name}'}` : this.money;
  },
};
console.log(`${user}`); // hint: string -> {name: "John"}
console.log(+user); // hint: number -> 1000
console.log(user + 500); // hint: default -> 1500 */

//Base conversion
// console.log(255..toString(2));

//console.log( 9999999999999999 );
//console.log(0.1 + 0.2 );

//Special characters \n
//const guestList = "Guests:\n * John\n * Pete\n * Mary";
//console.log(guestList); // a multiline list of guests

//Comparing strings
//console.log('a'.codePointAt(0));

//Array

//pop
/* const fruits = ["Apple", "Orange", "Pear"];
fruits.pop();// remove "Pear"
console.log(fruits);// Apple, Orange*/

//push
/* const fruits = ["Apple", "Orange"];
fruits.push("Pear");
console.log( fruits );// Apple, Orange, Pear*/

//shift
/*const fruits = ["Apple", "Orange", "Pear"];
fruits.shift() ;// remove Apple
console.log( fruits );// Orange, Pear*/

//unshift
/*const fruits = ["Orange", "Pear"];
fruits.unshift('Apple');
console.log( fruits );// Apple, Orange, Pear*/

//Internals
/*const fruits = ["Banana"]
const arr = fruits; // copy by reference (two variables reference the same array)
console.log( arr === fruits ); // true
arr.push("Pear"); // modify the array by reference
console.log( fruits ); // Banana, Pear - 2 items now */

//Multidimensional arrays
/*const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix[1][1]); // 5, the central element */

//Array toString method
//console.log([1, 2] + 1); // "1,21"

//splice
/*const arr = ["I", "study", "JavaScript", "right", "now"];
arr.splice(0, 3, "Let's", "dance");// remove 3 first elements and replace them with another
console.log(arr);// now ["Let's", "dance", "right", "now"]*/

//slice
/*const arr = ["t", "e", "s", "t"];
console.log( arr.slice(1, 3) );// e,s (copy from 1 to 3)
console.log( arr.slice(-2) );// s,t (copy from -2 till the end)*/

//Concat
/*const arr = [1, 2];
console.log( arr.concat([3, 4]) );// 1,2,3,4
console.log( arr.concat([3, 4], [5, 6]) );// 1,2,3,4,5,6
console.log( arr.concat([3, 4], 5, 6) );// 1,2,3,4,5,6*/

//forEach
/*const name = ["Bilbo", "Gandalf", "Nazgul"];
name.forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
});*/

//Find Array
/*const users = [
  { id: 1, name: "John" },
  { id: 3, name: "Mary" },
];
const user = users.find((item) => item.id == 1);
console.log(user.name);// John */

//Filter Array
/*const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];
const someUsers = users.filter((item) => item.id < 3);
console.log(someUsers.length);// 2 */

//Map Array
/*const lengths = ["Bilbo", "Gandalf", "Nazgul"].map((item) => item.length);
console.log(lengths);// 5,7,6*/

//Array Sort
/*const arr = [ 1, 4, 8, 9, 3, 2, 15 ];
console.log(arr.sort(function(a, b) { return a - b; }));// 1, 2, 15 */

// Array reverse
/*const a = [1, 2, 3];
a.reverse();
console.log(a); // [3, 2, 1]*/

//Array Join
/*const arr = ['Wind', 'Water', 'Fire'];
console.log(arr.join(';'));// 'Wind;Water;Fire'
console.log(arr.join());// 'Wind,Water,Fire'*/

//Array Reduce
//[1, 2, 3, 4].reduce((sum, current) => sum + current, 0); //10

const arrayLikeObj = { 0: 1, 1: 4, 2: 8, length: 3 };
console.log(Array.prototype.reduce.call(arrayLikeObj, (acc, curr) => acc + curr));// 13

function foo(a, b, c) {
  const s = Array.prototype.join.call(arguments);  //arguments is an array-like object
  console.log(s);  // '1,a,true'
}
foo(1, "a", true);
