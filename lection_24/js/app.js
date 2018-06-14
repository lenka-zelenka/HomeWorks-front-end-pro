var render = require('./render.js');
var data = require('./data.js');


data.load().then(function(response){
    render.renderGoods(response)
})
// goodsConteiner = render.renderGoods(goods);