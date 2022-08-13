//Advance JS

//Question One

console.log("-------------Question One-------------");

function makeCounter() {
    let count = 0;
  
    function counter() {
      return count++;
    }
  
    counter.set = value => count = value;
  
    counter.decrease = () => count--;
  
    return counter;
  }
  
  let counter = makeCounter();
  let counter2 = makeCounter();

  
  console.log(counter());
  console.log(counter());

  console.log(counter2());
  console.log(counter2());

  console.log("Returns 0 then 1");

console.log("-------------Question Two-------------");

console.log(counter.set(5));


console.log("-------------Question Three-------------");

function printNumbers(from, to) {
    
    let current = from;
  
    let timerId = setInterval(function() {
      console.log(current);
      if (current == to) {
        clearInterval(timerId);
      }
      current++;
    }, 1000);
  }

  console.log(printNumbers(3, 9));

console.log("-------------Question Four-------------");




console.log("-------------Question Five-------------");




console.log("-------------Question Six-------------");



console.log("-------------Question Seven-------------");



console.log("-------------Question Eight-------------");


console.log("-------------Question Nine-------------");



console.log("-------------Question Ten-------------");


console.log("-------------Question Eleven-------------");


console.log("-------------Question Tweleve-------------");