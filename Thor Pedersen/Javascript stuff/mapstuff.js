const nums = {
    1: 1,
    true: true
  };
  
  const map1 = new Map([
    [1, 1],
    [true, true]  
  ]);
  
  map1.set('key', 'value');

  map1.forEach((value, key) => {
    console.log(key, value);  
  });

  console.log([...map1.keys()])


// A WeakMap is a collection of key/value pairs whose keys must be objects, 
// with values of any arbitrary JavaScript type, and which does not create strong references to its keys. 
// That is, an object's presence as a key in a WeakMap does not prevent the object from being garbage collected. 
// Once an object used as a key has been collected, its corresponding values in any WeakMap become candidates for 
// garbage collection as well — as long as they aren't strongly referred to elsewhere.


const user1 = { name: "john" }
const user2 = { name: "mary" }

const secretKey1 = "asldjfalskdjf";
const secretKey2 = "alksdjfakjsdf";


const secretKeyMap = new WeakMap([ //WeakMap used for object keys to help with memory
  [user1, secretKey1],
  [user2, secretKey2]  
]);

const key = secretKeyMap.get(user1);
console.log(key);

const userMap = new Map([
    ["name", "john"],
    ["verified", true]  
  ]);
  
  console.log(userMap.size); // show map size