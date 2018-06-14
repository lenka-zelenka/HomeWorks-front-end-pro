
// private members

function renderGoods(goods){
    console.log('GOODS IS HERE')
    var goodsConteiner = document.getElementById('goods-container');    
    
    for (key in goods) {
        var col = document.createElement('div');
        col.className = "col s12 m4 l3";

        var card = document.createElement('div');
        card.className = "card"
        card.setAttribute('id', goods[key].id)

        var cardImage = document.createElement('div');
        cardImage.className = "card-image"
        cardImage.innerHTML = ' <img src="' +  goods[key].imageSrc + ' ">'

        var cardContent = document.createElement('div');
        cardContent.className = "card-content";
        cardContent.innerHTML = '<span class="card-title"> ' +  goods[key].title + '</span> '+ 
        '<span class="tial"> ' +  goods[key].price + '</span> ';

        var cardAction = document.createElement('div');
        cardAction.className = 'card-action';


        var addBtn = document.createElement('a');
        addBtn.className = 'add-to-cart';
        addBtn.innerText = 'В корзину!';
        addBtn.addEventListener('click', addToCart);

        cardAction.appendChild(addBtn);
        card.appendChild(cardImage);
        card.appendChild(cardContent);
        card.appendChild(cardAction);
        col.appendChild(card);        
        goodsConteiner.appendChild(col);
        
    }
}


module.exports = { 
    renderGoods: renderGoods
};
