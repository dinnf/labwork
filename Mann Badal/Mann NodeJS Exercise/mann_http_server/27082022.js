/*
 * Example: Sum all function from last time
 *
 */
function sumAllMathematic(min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) return 'ERROR';
  if (min < 0 || max < 0) return 'ERROR';
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }

  return ((min + max) * (max - min + 1)) / 2;
}

/*
    Q1:

    Write a function redundant that takes in a string str and returns a function
    that returns str.

    Examples
    const f1 = redundant("apple")
    f1() ➞ "apple"

    const f2 = redundant("pear")
    f2() ➞ "pear"

    const f3 = redundant("")
    f3() ➞ ""
    Notes
    Your function should return a function, not a string.
*/
console.log('-----------Q1------------')
function redundant(string){
  return function myFunction(){
    return string
  }
}
console.log(redundant("Hello! I am a string for question 1"))
/*
     Q2:
     Create a function which returns the number of true values there are in an
     array.

     Examples
     countTrue([true, false, false, true, false]) ➞ 2

     countTrue([false, false, false, false]) ➞ 0

     countTrue([]) ➞ 0
     Notes
     Return 0 if given an empty array.
     All array items are of the type bool (true or false).
*/
console.log('-----------Q2------------')

function countTrue(array) {
  return array.filter((x) => {return x ===true}).length
}
console.log(countTrue([true, false, false, true, false]))
/*
    Q3:
    This Triangular Number Sequence is generated from a pattern of dots that
    form a triangle. The first 5 numbers of the sequence, or dots, are:

    1, 3, 6, 10, 15
    This means that the first triangle has just one dot, the second one has three dots, the third one has 6 dots and so on.

    Write a function that returns the number of dots when given its corresponding triangle number of the sequence.
*/
console.log('-----------Q3------------')
function createTriangle(num){
  return (num * (num + 1))/2;
}

console.log(createTriangle(4))

/*
 *  Q4:
 *  Create a function that takes an array of strings and returns an array with
 *  only the strings that have numbers in them. If there are no strings
 *  containing numbers, return an empty array.
 *
 *  Examples
 *  numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]
 *
 *  numInStr(["abc", "abc10"]) ➞ ["abc10"]
 *
 *  numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]
 *
 *  numInStr(["this is a test", "test1"]) ➞ ["test1"]
 *  Notes
 *  The strings can contain white spaces or any type of characters.
 *  Bonus: Try solving this without RegEx.
 */
console.log('-----------Q4------------')
function numInStr(newArray1){
  return newArray1.filter(word => word.match(/\d/))
}
console.log(numInStr(["1a", "a", "2b", "b"]))
/*
    Q5:
    Write a JavaScript program to display the current day and time in the
    following format.
    Sample Output : Today is : Friday. Current time is : 4 PM : 50 : 22
*/
console.log('-----------Q5------------')
const today = new Date()
const weekday = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
let amPm = (today.getHours() >= 12) ? 'PM' : 'AM';

console.log(`Today is : ${weekday[today.getDay()]}. Current time is : ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()} ${amPm}`)

/*
    Q6:
    Write a JavaScript program to find the area of a triangle where lengths of
    the three of its sides are 5, 6, 7. Heron's Formula
*/
console.log('-----------Q6------------')
function triangleArea(a,b,c){
  let s = (a + b + c)/2;
  let area = Math.sqrt(s*((s-a)*(s-b)*(s-c)));
  return `The area of triangle with sides ${a},${b} and ${c} is ${area}`
}

console.log(triangleArea(5, 6, 7))
/*
    Q7:
    Write a JavaScript function that generates all combinations of a string.
    Example string : 'dog'
    Expected Output : d,do,dog,o,og,g
*/
console.log('-----------Q7------------')
String.prototype.sub_String = function(){
  var subset = [];
  for (var m = 0; m < this.length; m++){
    for (var n = m+1; n<this.length+1; n++){
      subset.push(this.slice(m,n));
    }
  }
  return subset;
};

console.log("Cat".sub_String());

/*
    Q8:
    Write a JavaScript function that returns a passed string with letters in alphabetical order.
    Example string : 'webmaster'
    Expected Output : 'abeemrstw'
    Assume punctuation and numbers symbols are not included in the passed string.
*/
console.log('-----------Q8------------')

function sortAlpha(str){
  return str.split('').sort().join('');
}
console.log(sortAlpha('webmaster'))
/*
    Q9:
    Write a JavaScript function that accepts a number as a parameter and check
    the number is prime or not. Note : A prime number (or a prime) is a natural
    number greater than 1 that has no positive divisors other than 1 and itself.
*/
console.log('-----------Q9------------')
/* function isPrime(num){
  if (num % 2 === 0){
    return `${num} is not a Prime number`
  }
  return `${num} is a Prime number`
} */

function isPrime(n){
  if (n===1)  {
    return `${n} is not a Prime number`;
  }else if(n === 2){
    return `${n} is a Prime number`;
  }else {
    for(var x = 2; x < n; x++){
      if(n % x === 0){
        return `${n} is not a Prime number`;
      }
    }
    return `${n} is a Prime number`;  
  }
}

console.log(isPrime(15))

/*
 * Q10:
 * Create a function that takes an array of numbers and return "Boom!" if the
 * digit 7 appears in the array. Otherwise, return "there is no 7 in the
 * array".
 *
 * Examples
 * sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
 *
 * sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
 *
 * sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
 */
/* console.log('-----------Q10------------')
function boom(array){
  const numbers = array.map(num => num).toString().split('')
  return numbers
} */
console.log('-----------Q10------------')
function sevenBoom(arr) {
  return arr.find(num => String(num).includes(7)) ? "Boom!" : "There is no 7 in the array";
}
console.log(sevenBoom([1, 2, 3, 4, 5, 6, 47]))
/*
 *Q11. Extended clock
 *We’ve got a Clock class. As of now, it prints the time every second.
 *class Clock {
 *  constructor({ template }) {
 *    this.template = template;
 *  }
 *
 *
 *  render() {
 *    let date = new Date();
 *
 *
 *    let hours = date.getHours();
 *    if (hours < 10) hours = '0' + hours;
 *
 *
 *    let mins = date.getMinutes();
 *    if (mins < 10) mins = '0' + mins;
 *
 *
 *    let secs = date.getSeconds();
 *    if (secs < 10) secs = '0' + secs;
 *
 *
 *    let output = this.template
 *      .replace('h', hours)
 *      .replace('m', mins)
 *      .replace('s', secs);
 *
 *
 *    console.log(output);
 *  }
 *
 *
 *  stop() {
 *    clearInterval(this.timer);
 *  }
 *
 *
 *  start() {
 *    this.render();
 *    this.timer = setInterval(() => this.render(), 1000);
 *  }
 *}
 *
 *
 *Create a new class ExtendedClock that inherits from Clock and adds the
  parameter precision – the number of ms between “ticks”. Should be 1000 (1
  second) by default. Your code should be in the file extended-clock.js
  Don’t modify the original clock.js. Extend it.
 */
class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

class ExtendedClock extends Clock{

}