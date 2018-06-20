
// private members

var model = {
    goods: null
}

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
    return doAjax('GET', './goods.json')
        .then(function (response) {
            model.goods = response.goods;

            return response;
        })

}

function sortBy(way) {
    var sortedNames = []

    for (key in model.goods) {
        sortedNames.push(model.goods[key]);
    }

    if (way === 'price') {
        sortedNames.sort(comparePrice)
    } else if (way === 'name') {
        sortedNames.sort(compareTitle)
    }

    for (var i = 0; i <= sortedNames.length - 1; i++) {
        model.goods['item-' + (i + 1)] = sortedNames[i]
    }
    return model;
}

function comparePrice(a, b) {
    return a.price - b.price;
}

function compareTitle(a, b) {
    return a.title.localeCompare(b.title);
}
function $getModel() {
    return model;
}


module.exports = {
    load,
    sortBy,
    $getModel
};
