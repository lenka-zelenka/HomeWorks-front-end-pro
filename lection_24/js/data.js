
// private members

var model = {
    goods: null
}

function doAjax(method, path){
    var xhr = new XMLHttpRequest();
    
    xhr.open(method, path, true);
    xhr.send();
    return new Promise(function(resolve, reject){
        xhr.onreadystatechange = function(){
            if (xhr.readyState != 4) {
                return;
            }
            if (xhr.status != 200) {
                reject(xhr);
            } 
            resolve(JSON.parse(xhr.responseText));
        }
    })
}
function load(){
    return doAjax('GET', './goods.json')
    .then(function(response){
        model.goods = response.goods;
        
        return response;
    })

}

function sortByName(){
    var sorted = {
        goods: null
    }
    var sortedNames = []
    sorted.goods = model.goods
    
    for (key in sorted.goods) {
        sortedNames.push(sorted.goods[key]);
    }
    sortedNames.sort(compareTitle)
    
    
    
        for(var i=0; i<sortedNames.length -1; i++) {
            for(key in sorted.goods) {
                sorted.goods[key] = sortedNames[i]
                continue;
        }
        
        // console.log(sorted)
        
        // if( sortedNames[key] === sorted.goods[key].title ){
        //     sorted.goods[key] = model.goods[key];
        // }        
    }
    console.log( sorted)
    // model.goods = soretd;
    // return model.goods;
}

function compareTitle(a, b) {
    return a.title.localeCompare(b.title) ;
}
function  $getModel(){
    return model.goods;
}


module.exports = {
    load,
    sortByName,
    $getModel
};
