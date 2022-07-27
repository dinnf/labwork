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
//delayHello = function() {delay("Hello",500)}
///delayHello()


console.log("*******Intermediate*************")
function ucFirst(text) {
    return (text[0].toUpperCase()) + text.substring(1);
  }
console.log(ucFirst('john'))
console.log(ucFirst('peter'))

function truncate(str, maxlength) {
if (str.length > maxlength) {
    newstring = str.substring(0, str.length - 3) + "..."
    return newstring
  }
  else {
    return str
  }
}
console.log(truncate("this string is too long",5))
console.log(truncate("What I'd like to tell on this topic is:", 20))

// Question 3 Array Operations
styles = ["Jazz","Blues"]
styles.push("Rock-N-Roll")
console.log(styles)
styles.splice(((styles.length/2)),1,"Classics")
console.log(styles)
console.log(styles.shift())
styles.unshift("Rap","Reggae")
console.log(styles)


/* Question 4 4. Translate border-left-width to borderLeftWidth
Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
That is: removes all dashes, each word after dash becomes uppercased.
Examples:
camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition'; */
function camelize(str) {
    let remove_dashes = str.split("-") 
    console.log(remove_dashes)
    let first_word_removed = remove_dashes.slice(1)
    console.log(first_word_removed)
    const capitalize_words = first_word_removed.map(function(word){
      return word[0].toUpperCase() + word.slice(1)
    })
    console.log(capitalize_words)
    return remove_dashes[0] + capitalize_words.join("")
    
      
    }
console.log(camelize("first-second-third"))
