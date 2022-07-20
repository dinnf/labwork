let schedule = {};

function isEmpty(schedule) {
    return (schedule) ? true : 'get up';
  }

console.log( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
console.log( isEmpty(schedule) ); // false
