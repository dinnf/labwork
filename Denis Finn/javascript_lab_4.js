const { delay } = require("lodash")

console.log("" + 1 + 0)
console.log("" - 1 + 0)
console.log(true + false)
console.log(6 / "3")
console.log("2" * "3")
console.log(4 + 5 + "px")
console.log("$" + 4 + 5)
console.log("4" - 2)
console.log("4px" - 2)
console.log("  -9  " + 5)
console.log("  -9  " - 5)
console.log(null + 1)
console.log(undefined + 1)
console.log(" \t \n" - 2)
console.log("*****")

console.log(5 > 4)
console.log("apple" > "pineapple")
console.log("2" > "12")
console.log(undefined == null)
console.log(undefined === null)
console.log(null == "\n0\n")
console.log(null === +"\n0\n")

console.log("*****")

/* let a = parseInt(prompt("First number?", 1));
let b = parseInt(prompt("Second number?", 2));
console.log(a+b) */

console.log("*****")
let a = 5
let b = 6
if (a + b < 4) {
    result = 'Below';
  } else {
    result = 'Over';
  }
console.log(result)
  
const result_ternary = result < 4 ? "Below" : "Over"
console.log(result_ternary)

console.log("*****")
//const delayHello = () => {return setTimeout(console.log("Hello"), 300)}
//delayHello = (who) => {setTimeout(console.log("Hello" + who), 300)}
//delayHello('Denis')
//console.log(delay(console.log("Hello"),300))
delayHello = function() {delay("Hello",500)}
delayHello()
