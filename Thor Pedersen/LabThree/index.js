//What are the results of these expressions?
// "" + 1 + 0        returns 10
// "" - 1 + 0        returns -1
// true + false      returns 1
// 6 / "3"          returns 2
// "2" * "3"        retuns 6
// 4 + 5 + "px"     returns 9px
// "$" + 4 + 5      returns $45
// "4" - 2          returns 2
// "4px" - 2        returns NaN
// "  -9  " + 5     returns -9  5
// "  -9  " - 5     reutrns -14
// null + 1         returns 1
// undefined + 1    returns NaN
// " \t \n" - 2     returns -2
// Or as below :)

const questionOne = [
"" + 1 + 0,
"" - 1 + 0,
true + false,
6 / "3",
"2" * "3",
4 + 5 + "px",
"$" + 4 + 5,
"4" - 2,
"4px" - 2,
"  -9  " + 5,
"  -9  " - 5,
null + 1,
undefined + 1,
" \t \n" - 2]

questionOne.forEach(question => console.log(question));

//Question 2
// Here’s a code that asks the user for two numbers and shows their sum.
// It works incorrectly. The output in the example below is 12 (for default prompt values).
// Why? Fix it. The result should be 3.

// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);

// alert(a + b); // 12

// Answer: 

//  let a = +prompt("First number?", 1);
//  let b = +prompt("Second number?", 2);

//  alert(a + b);


// Question 3

// 5 > 4                     returns true
// "apple" > "pineapple"     returns false
// "2" > "12"                returns true 
// undefined == null         returns true
// undefined === null        returns false
// null == "\n0\n"           returns false
// null === +"\n0\n"         returns false


const questionThree = [
    5 > 4,
    "apple" > "pineapple",
    "2" > "12",
    undefined == null,
    undefined === null,
    null == "\n0\n",
    null === +"\n0\n"
    ]

questionThree.forEach(question => console.log(question));    


// Question 4

// An alert with "Hello" would pop up


// Question 5
let a = 1;
let b = 2;

let result = (a + b < 4) ? "Below" : "Over";

console.log(result);

// Question 6

const delay = (func, ms) => (arg) => setTimeout(() => func(arg), ms);

const hello = (who) => console.log("Hello " + who);

const delayHello = delay(hello, 300);

delayHello("world");

// Question 7

let schedule = {};

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

console.log(isEmpty(schedule));

// Question 8 

let ladder = {
    step: 0,
    up() {
     this.step++;
     return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { 
      console.log( this.step );
      return this;
    }
  };

  ladder.up().up().down().showStep();
  
  // Question 9

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        this.value += +prompt('Add?', 0);
      };

}    