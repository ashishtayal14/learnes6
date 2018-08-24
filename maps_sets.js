// Map
let myMap = new Map(); 
myMap.set("r1", "admin"); 
myMap.set("r2", "user"); 
myMap.set("r3", "guest");

console.log(`Size of Map : ${myMap.size}`); // 3

console.log(myMap.get('r2'));

console.log(myMap.has('r1'));

myMap.forEach( (value,key) =>  console.log(`myMap[${key}] = ${value}`) ); 


// Set
let mySet = new Set(); 
mySet.add("John"); 
mySet.add("Jane");
mySet.add("Jane"); 
mySet.add("James");

console.log(`Size of Set : ${mySet.size}`); // 3

console.log(mySet.has("John"));

mySet.forEach( values => console.log(values));

