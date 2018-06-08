var model = {
    goods: null
}
var addBtn = document.querySelectorAll('.add-to-cart');
var clearBtn = document.querySelector('#clear-basket');
var basket = document.querySelector('#basket .collection');
var removeItemBtns = [];

function doAjax(method, path){
    var xhr = new XMLHttpRequest();
    
    xhr.open(method, path, true);
    xhr.send();
    return new Promise(function(resolve, reject){
        xhr.onreadystatechange = function(){
            if (xhr.readyState != 4) {
                return;
            }
            if (xhr.status != 200) {
                reject(xhr);
            } 
            resolve(JSON.parse(xhr.responseText));
        }
    })
}
doAjax('GET', './goods.json')
    .then(function(response){
        model.goods = response.goods;
    })


addBtn.forEach(function(item){
    item.addEventListener('click', addToCart);
});
clearBtn.addEventListener('click', function(event){
    clearBasket(basket);
    //очищаем все хранилище
    delete localStorage.goods;
});
removeItemBtns.forEach(function(item){
    item.addEventListener('click', clearBasketItem)
});


function addToCart (event){
    itemId = this.parentNode.parentNode.id;
    selectedGood = model.goods[itemId];
    setLocalGoods(selectedGood);
    InitGoodsCart(selectedGood)
}
function setLocalGoods(item) {
    var data = {};
    if (localStorage.goods) {
        data = getLocalGoods();
    }

    if (!data[item.id]) {
        data[item.id] = item;
        data[item.id].quantity = 1;
    }
    else {
        data[item.id].quantity++;
    }

    localStorage.setItem('goods', JSON.stringify(data));
}
function getLocalGoods(){
    return JSON.parse(localStorage.goods);
}
function InitGoodsCart(){
    tempitems = getLocalGoods();
    
    if (basket) {
        clearBasket(basket);
    }
    for (key in tempitems){        
        var li = document.createElement('li');
        removeItemBtn = document.createElement('a');
        removeItemBtn.classList.add('remove-item')
        removeItemBtn.innerHTML = '<i class="material-icons">close</i>';
        removeItemBtn.addEventListener('click', function(event){
            clearBasketItem(tempitems[key])
        });
        // removeItemBtn = '<a href="#" class="remove-item"><i class="material-icons">close</i></a>'
        li.classList.add('collection-item');
        li.innerHTML =  
            '<span class="item-title">'+ tempitems[key].title + ' </span>' + 
            '<span class="item-price">'+ tempitems[key].price + ' </span>' + 
            '<span class="new badge">' + tempitems[key].quantity + '</span>';
        li.appendChild(removeItemBtn)
        basket.appendChild(li);
        // removeItemBtns.push(removeItemBtn)
    }
}

function clearBasket(basket) {
    basket.querySelectorAll('li').forEach(item => item.remove());
    
}
function clearBasketItem(item) {
    console.log(item.id)
    // item.remove();
    // delete localStorage.goods[item];
    // // InitGoodsCart();
    var itemId = item.id;
    var selectedGood = model.goods[itemId];
    setLocalGoods(selectedGood);
    InitGoodsCart(selectedGood)
}