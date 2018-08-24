// 1. Without parameter and no return

// in ES5
var message = function() {
    console("Hello Xebians");  
};

// in ES6
let message = () => console.log("Hello Xebians");



// 2. Without paramerter and has return

// in ES5
var randomNum = function() {
    return Math.random(); 
 };
 
// in ES6 
let randomNum = () => Math.random();



// 3. With parameters and has return

// in ES5
var sum = function(a, b) {
    return a + b; 
 };

// in ES6 
let sum = (a, b) => a + b;
 

 
 









  // Use of lexical 'this'
  let bob = {
      name : 'Sherlock',
      friends: ["Dr. Watson","Irene Adler","Professor Moriarty"],
      printFriends(){
          this.friends.forEach(f => console.log(`${this.name} knows ${f}`))
      }
  }
  bob.printFriends();

  // In ES5 (Not working)
  var bob = {
    name : 'Sherlock',
    friends: ["Dr. Watson","Irene Adler","Professor Moriarty"],
    printFriends: function(){
        this.friends.forEach(function(f){
            console.log(this.name + " knows " + f)
        });
    }
}
bob.printFriends();

// In ES5 (Hack to make it working)
var bob = {
    name : 'Sherlock',
    friends: ["Dr. Watson","Irene Adler","Professor Moriarty"],
    printFriends: function(){
        var self = this; // the hack :) hihi
        this.friends.forEach(function(f){
            console.log(self.name + " knows " + f)
        });
    }
}
bob.printFriends();