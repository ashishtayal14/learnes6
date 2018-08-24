// in ES6
let i =10;
{
let i=20;
console.log("i : ",i); 
}
console.log("i : ",i);

// in ES5
var i =10;
{
var i=20;
console.log("i : ",i); 
}
console.log("i : ",i);

// in ES5
var no = 10; 
var no = 20; 
console.log(no);

// in ES6
let no = 10; 
let no = 20; 
console.log(no);


const PI = 3.141593
PI = 2.5;
console.log(PI > 3.0);





'use strict'
const MY_CONSTANT = {myProperty: 6};
console.log(MY_CONSTANT.myProperty);

MY_CONSTANT.myProperty = 18;
console.log(MY_CONSTANT.myProperty);


//MY_CONSTANT = {myProperty : 20};

// Workaround 
Object.freeze(MY_CONSTANT);
MY_CONSTANT.myProperty = 10;
console.log(MY_CONSTANT.myProperty);
