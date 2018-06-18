var render = require('./render.js');
var data = require('./data.js');

document.getElementById('sort-by-name').addEventListener('click', function(event){
    var sorted = data.sortByName();
    render.renderGoods(sorted)
})

data.load().then(function(response){
    render.renderGoods(response)
})


