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
        goods = response;
    })

var addBtn = document.querySelectorAll('.add-to-cart')

addBtn.forEach(function(item){
    item.addEventListener('click', addToCart);
});
// localCart =  JSON.parse(localStorage.getItem("goods"));
function addToCart (event){
    itemId = this.parentNode.parentNode.id;
    // selectedGood ={};
    selectedGood = goods.goods[itemId];
    selectedGood.quantity = 1;
    console.log(this.parentNode.parentNode.id, selectedGood); 
    setLocalGoods(selectedGood);
    InitGoodsCart(selectedGood)
}
function setLocalGoods(items) {
    localStorage.setItem('goods', JSON.stringify(items));
}
function getLocalGoods(){
    return localStorage.getItem('goods')
}
function InitGoodsCart(cartItems){
    tempitems = cartItems;
    console.log(cartItems.goods.length)
    var basket = document.querySelector('#basket .collection');
    for (var i = 0; i < cartItems.goods.length; i++ ){
        if(cartItems.goods[i].quantity){
            console.log(cartItems.goods[i].title)
            
            var li = document.createElement('li')
            li.classList.add('collection-item');
            li.innerHTML =  '<span class="item-title">'+ cartItems.goods[i].title +
                ' </span>' + '<span class="item-price">'+ cartItems.goods[i].price + 
                ' </span>' + '<span class="new badge">' + cartItems.goods[i].quantity + '</span>';
            basket.appendChild(li);
            
        }
        // console.log(cartItems.goods[i].title)
    }
}