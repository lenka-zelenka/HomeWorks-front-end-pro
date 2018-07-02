var render = require('./renderService.js');
var data = require('./dataService.js');

var repos = [];
var forks = [];

// data.load()
//     .then(resp => {
//         repos = resp.slice();        
//         return resp;
//     })
//     .then(response => response.map((item) => doAjax('GET', item.forks_url)))
//     .then(list => Promise.all(list))
//     .then(all => {
//         forks = all.slice();
//         render.renderData(repos, forks);
//         data.setModel(repos, forks);
//     });

var search_button = document.getElementById('search-btn')
search_button.addEventListener('click', (event) => data.search() )
// Promise.all(load).then(function(values){
//     console.log('values')
// })