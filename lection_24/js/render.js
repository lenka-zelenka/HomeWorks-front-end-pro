
// private members
var model = {
    goods: null
}


function renderGoods(data){
    model.goods = data.goods;
    var goodsConteiner = document.getElementById('goods-container')
    for (key in model.goods) {
        var col = document.createElement('div');
        col.className = "col s12 m4 l3";

        var card = document.createElement('div');
        card.className = "card"
        card.setAttribute('id', model.goods[key].id)

        var cardImage = document.createElement('div');
        cardImage.className = "card-image"
        cardImage.innerHTML = ' <img src="' + model.goods[key].imageSrc + ' ">'

        var cardContent = document.createElement('div');
        cardContent.className = "card-content";
        cardContent.innerHTML = '<span class="card-title"> ' + model.goods[key].title + '</span> '+ 
        '<span class="tial"> ' + model.goods[key].price + '</span> ';

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
function addToCart (event){
    itemId = this.parentNode.parentNode.id;
    selectedGood = model.goods[itemId];
    setLocalGoods(selectedGood);
    InitGoodsCart(selectedGood)
}

module.exports = { 
    renderGoods: renderGoods
};
