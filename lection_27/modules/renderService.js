function renderData(model) {
    console.log(model)
    var repos_list = document.getElementById('repos-list');
    repos_list.innerHTML = '';

    model.repos.forEach(function(item, pos){
        let items = `
            <li>
                ${item.name}
                <ul id="forks-list">
                    ${model.forks[pos].map(inneritem => `<li>${inneritem.owner.login}</li>`).join('\n')}
                </ul>
            </li>
            `;
        repos_list.innerHTML += items;
    });
} 

module.exports = { renderData } 
