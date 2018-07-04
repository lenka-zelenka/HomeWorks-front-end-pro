var render = require('./renderService.js');
var data = require('./dataService.js');

var model = {
    repos: [],
    forks: []
};

data.load()
    .then(resp => {
        model.repos = resp.slice();
        localStorage.repos = resp.slice();
        return resp;
    })
    .then(response => response.map((item) => doAjax('GET', item.forks_url)))
    .then(list => Promise.all(list))
    .then(all => {
        model.forks = all.slice();
        localStorage.forks = all.slice();
        render.renderData(model);
        data.setModel(model);
    });

var search_button = document.getElementById('search-btn')
search_button.addEventListener('click', (event) => render.renderData(data.search(event)))
