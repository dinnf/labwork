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
