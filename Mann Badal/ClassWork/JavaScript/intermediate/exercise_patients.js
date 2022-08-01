let patient = [
    {
	    id: '344fdeer',
        firstName: 'John',
        lastName: 'Doe',
        age: 72,
        fee:200 
    },

    {
        id: '4566fdew223',
        firstName: 'Helan',
        lastName: 'Doe',
        age: 87,
        fee:500 
    },

    {
        id: '344f56662df',
        firstName: 'Gayan',
        lastName: 'Silva',
        age: 90,
        fee:1500 
    }
];

/* Write functions to sort them based on their age (both ascending and decending), 
filter the patient above 80, 
sum the fee, and 
if the Age care is willing to increase the fee by 25% write a function to handle that as well.
 */


let patientsOver80 = patient.filter ( items => items.age > 80);
console.log(patientsOver80)

const ageUp = patient.sort((a,b) => a.age - b.age);
console.log(ageUp);

const ageDown = patient.sort((a,b) => b.age - a.age);
console.log(ageDown);

const feeTotal = patient.reduce((a, b) => a + b.fee, 0);
console.log(feeTotal);

const newFees = patient.map(person => ({...person, fee: (person.fee * 1.25)}));
console.log(newFees);