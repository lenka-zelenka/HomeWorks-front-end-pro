console.log('Lection_20');

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

var data1 = doAjax('GET', '/data.json');
var data2 = doAjax('GET', '/data2.json');

Promise.all([data1, data2])
    .then(function(response){
        console.log(response); 
    })
    .catch(function(){
        console.log('Error')
    });


