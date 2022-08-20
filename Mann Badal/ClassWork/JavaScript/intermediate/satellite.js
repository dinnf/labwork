/* const namesArr = ["John", "Thomas", "Harry", "Mann", "Thor", "Denis", "Raman"];

const [nameOne, nameTwo, ...theRest] = namesArr;

console.log(nameOne);

console.log(nameTwo);

console.log(theRest); */

/* const user = {
    name: "Thor",
    age: 152,
    job: "programmer"
    }
    
    const {name : usersName, age, job} = user;
    
    console.log(age); */

    const user = {
        name: "John",
        age: 30,
        height: 178
        };
        for (const [key, value] of Object.entries(user)) {
         console.log(`${key}:${value}`); // name:John, then age:30
}