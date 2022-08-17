// Intermediate JS

//Question one
console.log("------------Question One------------");

const ucFirst = (str) => str.charAt(0).toUpperCase() + str.slice(1);

console.log(ucFirst("john"));

//Question 2
console.log("------------Question Two------------");

const truncate = (str, maxlength) => {
        if (str.length > maxlength) {
            newstring = str.substring(0, maxlength-1) + "..."
            return newstring
          }
          else {
            return str
          }
}

console.log(truncate("Please give me a good grade :)", 10));
console.log(truncate("What I'd like to tell on this topic is:", 20));
//"What I'd like to te…"

//Question 3
console.log("------------Question Three------------");

const styles = ["Jazz", "Blues"];
console.log(styles);
styles.push("Rock-n-Roll");
console.log(styles);

function replaceMiddleArr(value, arr) {
    arr[Math.floor(arr.length / 2)] = value;
}

replaceMiddleArr("Classics", styles);
console.log(styles);
styles.shift();
console.log(styles);
styles.unshift("Rap", "Reggae");
console.log(styles);

//Question 4
console.log("------------Question Four------------");

function camelize(str) {
	const splitStrArr = str.split('-');

	const strMap = splitStrArr.map((word, index) => {
	return index == 0 ? word : word[0].toUpperCase() + word.slice(1);
  
  
})
	return strMap.join('');
}


console.log(camelize('background-color'));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));

//Question 5
console.log("------------Question Five------------");

function Calculator() {

    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  
    this.calculate = function(str) {
  
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return this.methods[op](a, b);
    };
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
  }

  let calc = new Calculator();
  console.log(calc.calculate("3 + 7"));

//Question 6
console.log("------------Question Six------------");

function unique(arr){
    const newArr = [];
    const arrSet = new Set(arr);
    for (value of arrSet) {
        newArr.push(value);
    }
    return newArr;
}
let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values));

//Question 7
console.log("------------Question Seven------------");
// Is returning a map rather than an array.
// we can use Array.from() to convert it to an array.

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

console.log(keys);


//Question 8
console.log("------------Question Eight------------");

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];

  let readMessages = new WeakSet();

// two messages have been read
readMessages.add(messages[0]);
readMessages.add(messages[1]);
// readMessages has 2 elements

// ...let's read the first message again!
readMessages.add(messages[0]);
// readMessages still has 2 unique elements

// answer: was the message[0] read?
console.log("Read message 0: " + readMessages.has(messages[0])); // true

messages.shift();
// now readMessages has 1 element (technically memory may be cleaned later)

//Question 9
console.log("------------Question Nine------------");

function sumSalaries(salaries){
    const salaryArr = [];
    for ( let salary of Object.values(salaries)) {
    	salaryArr.push(salary);
    }
    return salaryArr.reduce((a,b) => a +b, 0);
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
  console.log(sumSalaries(salaries));

//Question 10
console.log("------------Question Ten------------");

function topSalary(salaries) {

    let highestSalary = 0;
    let highestPaidPerson = null;
  
    for(const [name, salary] of Object.entries(salaries)) {
      if (highestSalary < salary) {
        highestSalary = salary;
        highestPaidPerson = name;
      }
    }
  
    return `${highestPaidPerson} with a salary of ${highestSalary}`;
  }

const moreSalaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
console.log(topSalary(moreSalaries));

//Question 11
console.log("------------Question Eleven------------");

function getSecondsToday() {
    const d = new Date();
    const hours = d.getHours();
    const hoursInSeconds = hours * 3600;
    const mins = d.getMinutes();
    const minsInSeconds = mins * 60;
    const seconds = d.getSeconds();
    
    const secondsToday = hoursInSeconds + minsInSeconds + seconds;

    return secondsToday;

}

console.log(getSecondsToday());

//Question 12
console.log("------------Question Twelve------------");

let room = {
    number: 23
  };
  
  let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room
  };
  
  // circular references
  room.occupiedBy = meetup;
  meetup.self = meetup;
  
  console.log( JSON.stringify(meetup, (key, value) => (key != "" && value == meetup) ? undefined : value));



