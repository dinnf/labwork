/* ⦁	Filter unique array members
Let arr be an array.
Create a function unique(arr) that should return an array with unique items of arr.
For instance:
function unique(arr) {
  //
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare, Krishna, :-O
P.S. Here strings are used, but can be values of any type.
 */
let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];

function unique(arr) {
  let newArry = arr.map
    let uniqueValue = [... new Set(values)]
    return uniqueValue
  }
  
console.log( unique() ); // Hare, Krishna, :-O
  