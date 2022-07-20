/* const hello = ( who )=> console.log("Hello" + who );
const delayHello = delay(hello, 300) =>delayHello = "world"; */

const delay = (func, ms) => (arg) => setTimeout(() => func(arg), ms);
const hello = (who) => console.log("Hello " + who);
const delayHello = delay(hello, 300);
delayHello("world");