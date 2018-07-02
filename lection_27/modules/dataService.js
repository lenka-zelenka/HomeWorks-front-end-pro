var repos = [];
var forks = [];
function doAjax(method, path) {
    var xhr = new XMLHttpRequest();

    xhr.open(method, path, true);
    xhr.send();
    return new Promise(function (resolve, reject) {
        xhr.onreadystatechange = function () {
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
function load() {
    return doAjax('GET', 'https://api.github.com/orgs/hillel-front-end/repos');    
}

// function executeRepos() {

// }

function setModel(a, b){
    repos = a.slice(); 
    forks = b.slice();
}

function search (event) {
    event.preventDefault();
    var input = document.getElementById('search-input');
    if(input.value.length >= 3){
        for( key in repos) {
            console.log(key.indexof(input.value))
        }
        // repos.forEach(function(item, pos){
        //     item.name.indexof(input.value);
        // })
    };
    console.log(repos)
}