var render = require('./render.js');
var data = require('./data.js');

document.getElementById('sort-by-name').addEventListener('click', function(event){
    var sorted = data.sortBy('name');
    render.renderGoods(sorted)
})

document.getElementById('sort-by-price').addEventListener('click', function(event){
    var sorted = data.sortBy('price');
    render.renderGoods(sorted)
})



data.load().then(function(response){
    render.renderGoods(response)
})


