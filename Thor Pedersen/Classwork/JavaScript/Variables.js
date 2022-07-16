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

const player = { name: 'john', 
age: 30,
sayHi() {
    console.log(`Hello ${this.name}`);
}
};
const anotherUser = Object.create(player);
anotherUser.age = 15;
console.log(player);
console.log(anotherUser);
console.log(`Another user Name: ${anotherUser.name}`);

player.sayHi();

const playerClone = {...player};
console.log(playerClone);
playerClone.name = "Harry";


//class stuff
class User {
    isAdmin = true;
    constructor(name) {
        this.name = name;
    }
}

const user01 = new User('Thor');

function logOn(user){
    user.isAdmin ? adminGiven() : notAdmin();
} 

function adminGiven() {
    console.log("Admin has logged in");
}

function notAdmin() {
    console.log("Sorry, You are not an admin");
}

logOn(user01);

//Intermediate JS

const n = 1.23456;
console.log(n.toFixed(2)); // 1.23, an object wrapper for number with method `toFixed()`
const str = 'hello world';
console.log(str.toUpperCase()); // we can explicitly create a wrapper

const bleh = {
    name: 'John',
    money: 1000,
    [Symbol.toPrimitive]( hint ) {
    return hint === 'string' ? `{name: '${this.name}'}` : this.money;
    }
};
    
    console.log(` ${bleh} `); // hint: string -> {name: "John"}
    console.log( +bleh ); // hint: number -> 1000
    console.log(bleh + 500) ; // hint: default -> 1500

    const guestList = "Guests:\n * John\n * Pete\n * Mary";

    console.log(guestList); // a multiline list of guests

   console.log('A'.codePointAt(0));
   console.log('a'.codePointAt(0));

   console.log([1,2] + 1);

   const arrRnd = ["I", "study", "JavaScript", "right", "now"];
   arrRnd.splice(0, 3, "Let's", "dance");// remove 3 first elements and replace them with another
    console.log( arrRnd ) // now ["Let's", "dance", "right", "now"]

    const arrSort = [ 1, 2, 15 ];

    console.log(arrSort.sort()); //1, 15, 2, The items are sorted as strings by default.
    console.log(arrSort.sort((a, b) => { return a - b; }));// 1, 2, 15

    const arrayLikeObj = { 0: 1, 1:4, 2:8, length: 3};
    Array.prototype.reduce.call(arrayLikeObj, (acc, curr) => (acc + curr)); // 13

    function foo(a, b, c) {
        const s = Array.prototype.join.call(arguments); //arguments is an array-like object
        console.log(s); // '1,a,true'
    }
foo(1, 'a', true);


const range = {
    from: 1,
    to: 5,
    [Symbol.iterator]() {
    this.current = this.from;
    return this;
    },
    next() {
    if (this.current <= this.to) {
    return { done: false, value: this.current++ };
    } else {
    return { done: true };
    }
    }
    };
    for (let num of range) {
        num=num+num;
    console.log(num); // 1, then 2, 3, 4, 5
}