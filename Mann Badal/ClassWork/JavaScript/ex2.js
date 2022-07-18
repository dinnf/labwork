const _ = require("lodash");
var obj = {
  x: 23,
};
// Deep copy
console.log("******Deep copy simple object demo********");
var deepCopy = _.cloneDeep(obj);
console.log("Comparing original with" + " deep ", obj === deepCopy);
obj.x = 10; // Changing original value
console.log("After changing original value");
console.log("Original value ", obj);
console.log("Deep Copy value ", deepCopy);
// Deep copy2
console.log("******Deep copy complex object demo********");
var obj2 = [{ x: 1 }, { y: 2 }];
var deepCopy2 = _.cloneDeep(obj2);
console.log("Comparing original with deep ", obj2[0] === deepCopy2[0]);
// Changing original value
obj2[0].x = 10;
// Values after changing original value
console.log("After changing original value");
console.log("Original value ", obj2);
console.log("Deep Copy value ", deepCopy2);
//conditional ternary operator demo
console.log("******Conditional ternary operator demo********");
function getFee(isMember) {
  return isMember ? "$2.00" : "$10.00";
}
console.log(getFee(true));
// expected output: "$2.00"
console.log(getFee(false));
// expected output: "$10.00"
console.log(getFee(null));
// expected output: "$10.00"
const age = 26;
const beverage = age >= 21 ? "Beer" : "Juice";
console.log(beverage); // "Beer"
const greeting = (person) => {
  const name = person ? person.name : "stranger";
  return `Howdy, ${name}`;
};
console.log(greeting({ name: "Alice" })); // "Howdy, Alice"
console.log(greeting(null)); // "Howdy, stranger"
console.log("******Array sum demo with for loop/reduce/lodash********");
const arr = [1, 2, 3, 4];
//adding arr with for loop
let sum1 = 0;
for (let i = 0; i < arr.length; i++) {
  sum1 += arr[i];
}
console.log(sum1);
//adding arr with reduce
const reducer = (accumulator, curr) => accumulator + curr;
console.log(arr.reduce(reducer));
//adding arr with lodash
var sum = _.sum(arr);
console.log(sum);
console.log("******Map keys demo********");
const map = new Map();
map.set("1", "str1"); // a string key
map.set(1, "num1"); // a numeric key
map.set(true, "bool1"); // a boolean key
map.set({ name: "John" }, 123); // an object key
console.log(map.get(1)); // 'num1'
console.log(map.get("1")); // 'str1'
console.log(map.size); // 4
console.log("******Map demo with for loop********");

const recipeMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50],
]);
for (let vegetable of recipeMap.keys()) {
  console.log(vegetable);
  // cucumber, tomatoes, onion
}
for (let amount of recipeMap.values()) {
  console.log(amount);
  // 500, 350, 50
}
for (let entry of recipeMap) {
  // the same as of recipeMap.entries()
  console.log(entry);
  // cucumber,500 (and so on)
}
console.log("******Map entries demo********");
const recipes = Object.fromEntries(recipeMap.entries());
console.log(recipes);
// { cucumber: 500, tomatoes: 350, onion: 50 }
console.log("******Map from an object demo********");
const obj1 = {
  name: "John",
  age: 30,
};
const map1 = new Map(Object.entries(obj1));
console.log(map1.get("name"));
// John
console.log("******Loop over set demo using for & foreach loops********");
const set = new Set(["oranges", "apples", "bananas"]);
for (let value of set) console.log(value);
set.forEach((value) => {
  console.log(value);
});
console.log("******Unique data will set in an array - demo********");
let text = "Na na na na na na na na Spyderman!";
let wordSet = new Set(text.split(" "));
let unique = [];
for (let word of wordSet) {
  unique.push(word);
}
console.log(unique);
