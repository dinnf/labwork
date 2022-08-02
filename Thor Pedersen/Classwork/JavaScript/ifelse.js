const user = {
    name: 'John',
    money: 1000,
    [Symbol.toPrimitive]( hint ) {
    return hint === 'string' ? `{name: '${this.name}'}` : this.money;
    }
    };
    

const car = {
    transmission: "auto",
    model: 'tesla',
    value: 1500,
    [Symbol.toPrimitive]( hint ) {
        return hint === 'string' ? `{Transmission: '${this.transmission}'}` : this.value;
        }
}

console.log( `${car}` ); // hint: string -> {name: "John"}
console.log( +car ); // hint: number -> 1000
console.log( car + 500) ;
