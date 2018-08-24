// employee.js

export class Employee { 
    constructor(name) { 
       this.name = name; 
    } 
  
    print(){
        return `${this.name} works in Google`;
    }
}

