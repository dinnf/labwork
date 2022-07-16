//Iterables

//Symbol.iterable With plain function
/*const range = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },
  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  },
};
for (let num of range) {
  console.log(num); // 1, then 2, 3, 4, 5
}*/

//Symbol.iterable With generator function
const range = {
  from: 1,
  to: 5,
};
range[Symbol.iterator] = function* () {
  for (let i = this.from; i <= this.to; i++) {
    yield i;
  }
};
for (const num of range) {
  console.log(num);  // 1, 2, 3, 4, 5
}
