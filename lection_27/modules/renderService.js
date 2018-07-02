
// var data = []
function renderData(repos, forks) {
    

    // console.log(repos);
    var repos_list = document.getElementById('repos-list');
    // for (var innerItem of forks) {
    //     if (forks.length) {
    //         data = forks.map(inneritem => inneritem.owner)
    //     }
    // }
    // console.log(data)
    repos.forEach(function(item, pos){
        // console.log(item.name)
        let items = `
            <li>
                ${item.name}
                <ul id="forks-list">
                    ${forks[pos].map(inneritem => `<li>${inneritem.owner.login}</li>`).join('\n      ')}
                </ul>
            </li>
            `;
        repos_list.innerHTML += items;
    });
} 

module.exports = { renderData } 