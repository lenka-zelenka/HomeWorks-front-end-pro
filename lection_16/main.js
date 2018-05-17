window.onload = function() {
    var contextmenu = document.querySelector('#context-menu');
    var block = document.querySelector('.block');
    var mousepositionX,
        mousepositionX;



    acntionCtrl = {
        JumpHandler: JumpHandler,
        Remove: Remove,
        ChangeColor: ChangeColor
    }



 function JumpHandler() {
    Jump(block);
 }
    
    function Jump(block){
        setTimeout(function () {
            block.style.top = block.offsetTop - h + 'px';
        },200)
        setTimeout(function () {
            block.style.top = block.offsetTop + h + 'px';
        },300)
    }
    function Remove(){
        console.log('Paste')
    }
    function ChangeColor(){
        console.log('Delete')
    }


    document.addEventListener('contextmenu', function(event){
        event.preventDefault();
             
        contextmenu.style.left = event.pageX + 'px';
        contextmenu.style.top = event.pageY + 'px';
        contextmenu.classList.add('show');
    })
    document.addEventListener('mousedown', function(event){     
        contextmenu.classList.remove('show');
    }) 


    // DATA
    var cm = {
        actions: [
            {
                title: 'Jump',
                handler:  'JumpHandler',
            },
            {
                title: 'Remove',
                handler:  'Remove',
            },
            {
                title: 'Change color',
                handler:  'ChangeColor',
            },
            
        ]
    }


    for(i=0; i < cm.actions.length; i++) {
        var li = document.createElement('li');
        li.classList.add('context-menu-item');
        li.innerHTML = cm.actions[i].title;
        
        li.addEventListener('mousedown', acntionCtrl[cm.actions[i].handler]);
        contextmenu.appendChild(li);
    }



var h = 100,
    step = 20,
    direction = 1,
    gap = 5;

function sitDown() { 
    console.dir(block)
    if (block.clientHeight === 100) {
        block.style.height = 50 + 'px'
        block.style.top = block.offsetTop + 50 + 'px'
    }
}

function getUp() {
    if (block.clientHeight === 50) {
        block.style.height = 100 + 'px'
        block.style.top = block.offsetTop - 50 + 'px'
    }
}
document.addEventListener('keyup', function(event){
    if (!event.ctrlKey) {
        getUp();
    }
})
document.addEventListener('keydown', function(event){
    console.log(event)
    if (event.ctrlKey) {
        sitDown();
    }
    switch(event.keyCode) {
        case 32:
            setTimeout(function () {
                block.style.top = block.offsetTop - h + 'px';
            },200)
            setTimeout(function () {
                block.style.top = block.offsetTop + h + 'px';
            },300)
            break;
        case 37 : 
            block.style.left = block.offsetLeft - step + 'px';
            break
        case 38: 
            block.style.top = block.offsetTop - step + 'px'; 
            break
        case 39: 
            block.style.left = block.offsetLeft + step + 'px';
            break
        case 40: 
            block.style.top = block.offsetTop + step + 'px';
    }
})



}