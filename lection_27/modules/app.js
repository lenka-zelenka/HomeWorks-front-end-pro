var render = require('./renderService.js');
var data = require('./dataService.js');

var repos = [];
data.load()
    .then(response => response.map((item) => doAjax('GET', item.forks_url)))
    .then(list => Promise.all(list))
    .then(all => render.renderData(all));

// Promise.all(load).then(function(values){
//     console.log('values')
// })