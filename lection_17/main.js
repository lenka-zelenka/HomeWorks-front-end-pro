//  перебирающие методы
// 

window.onload = function(){
    // var buttons = document.querySelectorAll('[class^="btn"]');
    // console.log(buttons)
    // buttons.forEach(function(item){
    //     item.addEventListener('click', function(){
    //         console.log(item);
    //     })
    // })


    data = [1, 2, 3, 'slkvjlskfjsf', {x : 3}];

    myMethods = {
        getValuesByType: function(type) {
            if (typeof this.item ==  type) { 
                return this.item;
            }       
        },

    };
  
    var res = myMethods.getValuesByType.call(data, 'string');
    console.log(res);


    
}