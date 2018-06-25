// class World{
//     constructor(type, color) {
//         this.type = type;
//         this.color = color;
//     }
//     eat(){
//         console.log(' eat')
//     }
// }
//  class Animal extends World {
//      constructor(size, type, color) {
//         super(type, color);        
//         this.size = size;
//      }
//      sleep(){
//          console.log('sleep')
//      }
//  }

//  class Croc extends Animal {
//     constructor(range, age, size, type, color) {
//         super(size, type, color);     
//         this.range = range;
//         this.age = age;
           
//     }
//     sleep(){
//         console.log('sleep')
//     }
// }

// var Gena = new Croc('range', 'age', 200, 'mleco', 'red');


//  -------------------------------------------------------------


class World{
    constructor(obj) {
        this.type = obj.type;
        this.color = obj.color;
    }
    eat(){
        console.log(' eat')
    }
}
 class Animal extends World {
     constructor(obj) {
        super(obj);        
        this.size = obj.size;
     }
     sleep(){
         console.log('sleep')
     }
 }

 class Croc extends Animal {
    constructor(obj) {
        super(obj);     
        this.range = obj.range;
        this.age = obj.age;
           
    }
    bite(){
        console.log('bite')
    }
}

var objGena = {
    range: 50,
    age: 16,
    size: 200, 
    type: 'mleco', 
    color: 'red'
} 

var Gena = new Croc(objGena);