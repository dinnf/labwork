/*let networkObject = {
    name: 'Linux NAS',
    ip: '192.168.1.254',
    dns: '192.168.1.1',
    dgw: '192.168.1.1',
    vlans: ['co-op', 'dmz', 'server'],
    getNetworkID:function(){
        return this.ip.split(".");
        }
    }
 
 
console.dir(networkObject);

for (let netinfo in networkObject){
console.log(netinfo)
}

let myset = new Set([1,2,3,4,5]);
console.dir(myset)

let myarr = [1,2,3,4,5]
console.dir(myarr)
let iter = myarr[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.dir(myarr);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

function *simpleGen() {
console.log("Before 1");
yield "one";
console.log("After 1");
console.log("Before 2");
yield "two";
console.log("After 2");
}

const genObject = simpleGen();
console.dir(genObject);
console.log(genObject.next());
console.log(genObject.next());
console.log(genObject.next());

function* demo(){
 let id =1;
 while(true){
 yield id;
 id++;
 }
 }
 
 const genObject2 = demo();
 console.log(genObject2.next());
 console.log(genObject2.next()); 
 console.log(genObject2.next());*/


/*function* patientID(){
  for (let i = 1; i++;) {
  let getRandomID = Math.floor (Math.random() * 50 + 100)
		yield getRandomID;
  }
}
 const getPatientID = patientID();
 console.log(getPatientID.next());
 console.log(getPatientID.next());
 console.log(getPatientID.next());
 console.log(getPatientID.next());
 console.log(getPatientID.next());
 console.log(getPatientID.next());*/


 let promiseToCleanTheRoom = new Promise(function(resolve, reject) {

    //cleaning the room
  
    let isClean = true;
  
    if (isClean) {
      resolve(' Clean');
    } else {
      reject(' not Clean');
    }
  
  });
  
  promiseToCleanTheRoom.then(function(fromResolve) {
    console.log('the room is' + fromResolve);
  }).catch(function(fromReject){
      console.log('the room is' + fromReject);
  })

