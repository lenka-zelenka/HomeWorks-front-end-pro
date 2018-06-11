
// var data = {
//     datastr: null,
//     modelCount: 0,
    
//     symbol: null,

//     get model(){
//         return  {
//             sumbol: this.symbol,
//             count: this.datastr.length
//         } ;
//     },
//     set model(string){
//         if (this.modelCount == 0) {
//             this.datastr = string;
//             this.modelCount = 1;
//             console.log(this.str, this.modelCount);            
//         } else if(this.modelCount == 1) {
//             var buffer = this.datastr;
//             this.symbol = string;
//             this.datastr = buffer.split(string);
//             this.modelCount = 0;
//             console.log(this.str, this.modelCount);
//         }
//     }
// }

// data.model = 'Hello, how, are you?';
// console.log(data);
// data.model = ',';
// console.log(data);


var obj = {
    x: 10,
    y: 20,

    set model(data){
        // Array.prototype.forEach(function(element) {
        //     console.log(data.key);
        // })
        for (key in data){
            this[key] = data[key];
        
            console.log(data[key]);
        }
    }
}

obj.model = {
    x: {
        value: 33,
        operation: '*'
    },
    z: {
        value: 75,
        operation: '+'
    }
}