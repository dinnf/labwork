const n = 1.23456;
n.toFixed(2) ; // 1.23, an object wrapper for number with method `toFixed()`
const str = 'hello world';
console.log(str.toUpperCase() === (new String(str)).toUpperCase());
console.log((3 == 4))
//const user = {
  //  name: 'John',
 //   function() {
 //   return this.name;
 //    }
 //    };
  //  console.log( 'hello ' + user);
const apple = {
        price: 100,
        valueOf() {
        return this.price;
         }
        };
        console.log( apple*3 );
       // const user = {
         //   name: 'John',
           // money: 1000,
            // [Symbol.toPrimitive]( blue ) {
           // return blue === 'string' ? `{name: '${this.name}'}` : this.money;
            // }
           // };
           // console.log( user ); // hint: string -> {name: "John"}
           // console.log( +user ); // hint: number -> 1000
           // console.log(user + 500) ; 
            console.log(0.1+0.2)
const car = {
 name: 'Mazda',
 color: 'blue',
 transmission:'auto',
 value: 4000,
 //[Symbol.toPrimitive](hint) {
//return hint ==='string' ? `{name: ${this.transmission}}`:this.value
// }
}

console.log(car)
console.log(car + 500)
console.log( `${car}` )
console.log(+car)
const myArr = [1,'bread',[1,2],{name: 'Denis'},() => {console.log('good day')}]
console.log(myArr)
console.log(myArr[4])
const myArr1 = [1,2]
const myArr2 = [3,4]
const myArr3 = myArr1.concat(myArr2)
console.log(myArr3)
myArr3.forEach((value,ind,bi) => console.log(value,ind,bi))
const second = myArr.splice(1,3)
console.log(second)