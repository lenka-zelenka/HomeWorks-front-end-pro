function renderData(model) {
    console.log(model)
    var repos_list = document.getElementById('repos-list');
    repos_list.innerHTML = '';

    model.repos.forEach((item, pos) => {
        let itemsList = `<li>${item.name}</li>`;

        if (model.forks) {
            let inerItemsList = `<ul id="forks-list">
                    ${model.forks[pos].map(inneritem => `<li>${inneritem.owner.login}</li>`).join('\n')}
                </ul>`
            itemsList += inerItemsList;
        }
        repos_list.innerHTML += itemsList;
    });
}

module.exports = { renderData } 
