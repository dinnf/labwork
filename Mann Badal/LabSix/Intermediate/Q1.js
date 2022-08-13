/* ⦁	Uppercase the first character
Write a function ucFirst(str) that returns the string str with the capitalized first character, for instance:
	ucFirst("john") == "John"; */

function ucFirst(name){
    return name.charAt(0).toUpperCase() + name.slice(1);
}

console.log(ucFirst("mann"))