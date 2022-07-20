//{let cheese = 'cheddar'}
//console.log(cheese)
const readline = require("readline");

const rl1= readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl1.question("First number? ", function (answer1) {
  console.log(`first is ${answer1}`);
     rl1.close();
  });

const rl2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl2.question("Second number?", function (answer2){
    console.log(`second is ${answer2}`)
    rl2.close();
})
//console.log(answer1 + answer2)