let helloText = "say Hi";
let check = 4;
let hello;

check > 3 ? hello ="Say Hello instead" : "say Hi";

console.log(hello);

let mountains = ['Everest', 'Fuji', 'Nanga Parbat'];
console.log(mountains[0]); // 'Everest'
console.log(mountains[1]); // 'Fuji'
console.log(mountains[2]); // 'Nanga Parbat'

let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
console.log(seas);
seas.push('Red Sea');
console.log(seas);
seas.unshift('Thors Sea');
console.log(seas);
seas.pop();
console.log(seas);
let NorthSeaIndex = seas.indexOf('North Sea');
console.log(NorthSeaIndex); // 2

// Exercise Array

//For understanding more about arrays try creating an array that
//has 5 elements.
let heroes = ["Thor", "Superman", "Spiderman", "Batman", "Ironman"];
//• Replace the value of the element at position 1 and 4.
console.log(heroes);
heroes[1] = "Hulk";
heroes[4] = "Thomas the Tank Engine";
console.log(heroes);

// objects

const user = { // an object
    name: 'joe', // by key 'name' store value 'joe'
    age : 20, //by key 'age' store value 20
    'has a dog': false //multi word prop name 'has a dog' store value false
};

console.log(user.name);
user.name = "Ben";
console.log(user.name);
user["has a dog"] = true;
console.log(user["has a dog"]);

const funcKey = () => console.log('func as key');
const username = {
[funcKey]: 'I am a value of a function'
};

console.log(username);

const player = { name: 'john', age: 30};
const anotherUser = Object.create(player);
anotherUser.age = 15;
console.log(player);
console.log(anotherUser);
console.log(`Another user Name: ${anotherUser.name}`);

const playerClone = {...player};

console.log(playerClone);
playerClone.name = "Harry";
console.log(playerClone);
console.log(player);