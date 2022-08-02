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
let sortByAge = patient.sort(function(a,b) {return a.age - b.age});
console.log(sortByAge)
let sortByReverseAge = patient.sort(function(a,b) {return b.age - a.age})
console.log(sortByReverseAge)
let overEighty = patient.filter(function(patien) {return patien.age >80})
console.log(overEighty)
let feeSum = patient.reduce((function(accumulator,currentValue) {return accumulator +currentValue.fee}),0)
console.log(feeSum)
let increasedFee = patient.map((function(element){return element.fee = element.fee*1.25}))
console.log(increasedFee)
console.log(patient)
const map1 = patient.map((x => x.fee*1.25))
console.log(map1)
