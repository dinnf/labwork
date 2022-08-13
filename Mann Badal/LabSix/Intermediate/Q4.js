/* ⦁	Translate border-left-width to borderLeftWidth
Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
That is: removes all dashes, each word after dash becomes uppercased.
Examples:
camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
 */

function camelize(str){
    let dashWord = str.split('-');
    let upperCaseWords = dashWord.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    let res = upperCaseWords.join('');
    return `${res}`;
}

console.log(camelize("background-color"))