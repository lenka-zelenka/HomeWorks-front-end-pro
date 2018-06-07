var model = {
    goods: null
}

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

var addBtn = document.querySelectorAll('.add-to-cart')

addBtn.forEach(function(item){
    item.addEventListener('click', addToCart);
});
// localCart =  JSON.parse(localStorage.getItem("goods"));
function addToCart (event){
    itemId = this.parentNode.parentNode.id;
    // selectedGood ={};
    selectedGood = model.goods[itemId];
    // selectedGood.quantity = 1;
    // console.log(this.parentNode.parentNode.id, selectedGood); 
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
    
    var basket = document.querySelector('#basket .collection');
    if (basket) {
        clearBasket(basket);
    }
    
    for (key in tempitems){
            // console.log(tempitems.key)
        
        var li = document.createElement('li')
        li.classList.add('collection-item');
        li.innerHTML =  '<span class="item-title">'+ tempitems[key].title +
            ' </span>' + '<span class="item-price">'+ tempitems[key].price + 
            ' </span>' + '<span class="new badge">' + tempitems[key].quantity + '</span>';
        basket.appendChild(li);
    }
}

function clearBasket(basket) {
    basket.querySelectorAll('li').forEach(item => item.remove());
}