var str = 'yellow'
declaration()

const test = 'hello';
console.log(`jhkjh ${test}`)
console.log(typeof null)
console.log(typeof console)
console.log(typeof 9)
console.log(typeof Number)
function testNum(a) {
    let result;
    if(a>0) {
        result = 'Positive'
    } else {
        result = 'Negative'
    }
    return result
}
console.log(testNum(8))
console.log(testNum(-2))
function testNumb(b) {
   return ( (b>=0) ? "positive": "negative")
}
console.log(testNumb(8))
console.log(testNumb(0))
declaration()
var str = 'yellow'
function declaration() {
    console.log(`function declaration example ${str}`)
}
//functionExpression()
const functionExpression = function(){
    console.log('function expression')
}
functionExpression()
//declaration()
const functionExpression2 = () => {console.log("Dfunction expression")
}
functionExpression2()
const group = {
    title: 'hi',
    say: function() { console.log(this)
    }}
    group.say()
let x=0;
while (x<5){
    console.log(x);
    x++;
}
do{
    console.log('do')

} while (x<5)

for (let k = 0; k <= 20;k++){
    if (k %2 ==0) {
        console.log(k + " - Even")
    } else console.log(k + " - Odd")
}