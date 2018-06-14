
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



module.exports = {
    load
};
