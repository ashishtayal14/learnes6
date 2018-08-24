// ES6
class Polygon { 
    constructor(height, width) { 
       this.h = height; 
       this.w = width;
    } 
    test() { 
       console.log("The height of the polygon: ", this.h) 
       console.log("The width of the polygon: ",this. w) 
    } 
} 
 
//creating an instance  
let polyObj = new Polygon(10,20); 
polyObj.test();


// ES5
var Polygon = function (height, width) {
    this.h = height;
    this.w = width;
};
Polygon.prototype.test = function (x, y) {
    console.log("The height of the polygon: ", this.h) 
    console.log("The width of the polygon: ",this. w) 
};

var polyObj = new Polygon(10,20); 
polyObj.test();






// Inheritance and Method Overriding

class PrinterClass { 
    doPrint() {
       console.log("doPrint() from Parent called…") 
    } 
}  
class StringPrinter extends PrinterClass { 
   doPrint() { 
      super.doPrint() 
      console.log("doPrint() from child called…") 
   } 
} 
let obj = new StringPrinter() 
obj.doPrint()




class Rectangle extends Shape {
    constructor (id, x, y, width, height) {
        super(id, x, y)
        this.width  = width
        this.height = height
    }
}
class Circle extends Shape {
    constructor (id, x, y, radius) {
        super(id, x, y)
        this.radius = radius
    }
}