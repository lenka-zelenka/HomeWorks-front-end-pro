
// private members
var model = {
    goods: null
}


function renderGoods(data) {
    model.goods = data.goods;
    var goodsConteiner = document.getElementById('goods-container');
    goodsConteiner.innerHTML = '';
    // create the html for the goods items
    var goodscard = '';
    for (key in model.goods) {
        var goodscard = `
            <div class="col s12 m4 l3">
                <div class="card" id="${model.goods[key].id}">
                    <div class="card-image">
                        <img src="${model.goods[key].imageSrc}">
                    </div>
                    <div class="card-content">
                        <span class="card-title">${model.goods[key].title}</span>
                        <span class="tial">${model.goods[key].price}</span>
                    </div>
                    <div class="card-action">
                        <a class="add-to-cart" onclick="${addToCart()}">В корзину!</a>
                    </div>
                </div>
            </div>        
        `;
        goodsConteiner.innerHTML += goodscard;

    }
}
function addToCart(event) {
    itemId = this.parentNode.parentNode.id;
    selectedGood = model.goods[itemId];
    setLocalGoods(selectedGood);
    InitGoodsCart(selectedGood)
}

module.exports = {
    renderGoods: renderGoods
};
