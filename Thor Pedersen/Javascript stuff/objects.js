//Objects pass by reference rather than value 

/*
  undefined, null, boolean, number, string, symbol
*/
// primitive - passed by value

// const num = 'hello world';
// const anotherNum = 'hello world';
// console.log(num === anotherNum);

// object - passed by reference
const obj = {};
const anotherObj = obj;
anotherObj.a = 1;

console.log('obj', obj);
console.log('another obj', anotherObj);

//get and modify object data

const color = 'black';
const hexCode = '#000';

const colors = {
  'yellow Color': '#ff0',
  blue: "#f00",
  orange: "#f60",
  [color]: hexCode
};

colors[color] = hexCode;

// function getColor(key) {
//   return colors[key];   // use the square brackets when the value can change  return colors.key will not work.
// }

delete colors.blue;
console.log(colors);

// console.log(getColor('orange'));

//some examples Destructuring

// const user = {
//     name: "Reed",
//     username: "Reedbarger",
//     email: "reed@gmail.com",
//     details: {
//       title: "Programmer"  
//     }  
//   };
  
//   // const { title } = user.details   
//   // const { name, details: { title} } = user;   // creating varaibles by destructing the user object
  
//   function displayUserBio({ name, details: { title} }) {  // same as display function displayUserBio(userData)
//     console.log(`${name} is a ${title}`);   //using the destructed variables 
//   }
  
//   displayUserBio(user);
  
  // const { username, email } = user;
  
  // function displayUser() {
  //   console.log(`username: ${username}, email: ${email}`);  
  // }
  
  // displayUser()

// Challenge: The recommendations object contains a set of of nice places to visit in Brighton, UK,
// organized by what you'd like to do (eat pancakes, drink coffee etc).

// 1. Destructure the places to drink (coffee and beer) from recommendations
// 2. Destructure the places to listen to music
// 3. Write a function that takes the recommendations object as an argument and that
//      a) Logs out the music venues in recommendations when invoked 
//      b) Uses object descructuring to get the "traditional" and "jazz" keys from the argument

const recommendations = {
    pancakes: 'Nowhere Man',
    riceBowls: 'Pompoko',
    beer: 'The Craft Beer Co.',
    coffee: 'Coffee Roasters',
    small_plates: 'Venetian Plates',
    music: { 
        traditional: 'Fiddler\'s Elbow', 
        jazz: 'The Paris House'
    }
}

const { beer, coffee } = recommendations;
//const { music: {traditional, jazz} } = recommendations;

const recommendMusic = ({ music: {traditional, jazz} }) => console.log(`${traditional} and ${jazz}`);

recommendMusic(recommendations);

// for-in loop
// const obj = { one: 1, two: 2 };

// for (const key in obj) {
//   console.log('value', obj[key]);
// }

// Object.keys(), Object.values(), Object.entries()
// const user = {
//   name: 'John',
//   age: 29  
// };

// console.log(Object.entries(user));

const users = {
  '2345234': {
    name: "John",
    age: 29
  },
  '8798129': {
    name: "Jane",
    age: 42
  },
  '1092384': {
    name: "Fred",
    age: 17 
  }
};

const usersOver20 = Object.entries(users).reduce((acc, [id, user]) => {
  if (user.age > 20) {
    acc.push({ ...user, id });
  }  
  return acc;
}, []);
console.log(usersOver20);

// const values = Object.keys(user).map(key => user[key]);
// console.log(values);
// console.log(Object.values(user));

// const monthlyExpenses = {
//   food: 400,
//   rent: 1700,
//   insurance: 550,
//   internet: 49,
//   phone: 95  
// };

// const monthlyTotal = Object.values(monthlyExpenses).reduce((acc, expense) => acc + expense, 0);
// console.log(monthlyTotal);

