var model = {
    repos: [],
    forks: []
};

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

function setModel(modele) {
    model = modele;
}

function search(event) {
    event.preventDefault();
    console.log(model.repos)
    var input = document.getElementById('search-input');

    let searchModel = {
        repos: [],
        forks: []
    };

    if (input.value.length >= 3) {

        for (let obj of model.repos) {
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    if (typeof (obj[key]) == "string") {
                        if (obj[key].indexOf(input.value) >= 0) {
                            searchModel.repos.push(obj);
                            break;
                        }
                    }
                }
            }
        }
    };

    // console.log(searchModel)
    return searchModel

}
