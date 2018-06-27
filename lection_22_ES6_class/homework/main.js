// class Element {
//     constructor(selector) {
//         this.selector = document.createElement(selector);

//     }
//     //запишет в текст элемента '!'
//     html(text) {
//         this.selector.innerText += text;
//     }
//     // запишет в начало элемента '!'
//     append(text) {
//         document.body.appendChild(this.selector)
//     }
//     prepend(text) {
//         // this.selector.insertBefore(this.selector, text)
//     }
// }
// var elem = new Element('div');
// elem.html('!')//запишет в текст элемента '!'
// elem.append('!'); //запишет в начало элемента '!'
// elem.prepend('!'); //запишет в конец элемента '!'
// // elem.attr('class', 'www'); //запишет в атрибут class значение www
// // 
// // Должны работать цепочки методов:
// // elem.html('hello').append('!').prepend('!');
// // elem.attr('class', 'www').attr('title', 'hello');

// -----------------------------------------------------
// 2)  Реализуйте на ООП игру "морской бой" против компьютера.

class Field {
    constructor(field, role) {
        this.field = field;
        this.role = role;

        this.getStatus = function (target) {
            let i = target.id[0],
                j = target.id[2];

            if (this.field[i][j] === '+') {
                target.classList.add('broken');
            } else {
                target.classList.add('missed');
                this.compMove();
            }
        }
        this.setStatus = function(){
            // функция устанавливает значение на поле юзера
        }
        this.compMove = function () {
            console.log('move');
        }

    }
    render() {
        var fieldBlock = document.getElementById('field-' + this.role)

        for (let i = 0; i < this.field.length; i++) {
            for (let j = 0; j < this.field[i].length; j++) {
                var block = document.createElement('div');
                block.id = i + '-' + j;
                block.classList.add('square');
                this.role === 'user' && this.field[i][j] === '+' ? block.classList.add('unbroken') : ''
                this.role === 'comp' ? block.addEventListener('click', (event) => this.getStatus(event.target)) : ''
                fieldBlock.appendChild(block)
            }
        }
    }


}
// class SeaBattle extends Field {
//     constructor(field, role) {
//         super();
//         super.render();

//         this.field = field;
//         this.role = role;
//     }
//     render() { }
// }

const userField = [
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '+', '+', '+', '.', '.', '+', '+'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '+', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '+', '+', '+'],
    ['.', '.', '.', '.', '+', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '+', '.', '+', '+', '.', '.'],
    ['.', '.', '.', '.', '+', '.', '.', '.', '.', '.'],
    ['.', '+', '+', '.', '+', '.', '+', '.', '+', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.']
]
const compField = [
    ['.', '.', '+', '.', '+', '.', '+', '.', '.', '.'],
    ['.', '.', '+', '.', '+', '.', '+', '.', '+', '.'],
    ['.', '.', '+', '.', '+', '.', '+', '.', '.', '.'],
    ['+', '.', '.', '.', '+', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '+', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '+', '.', '.', '.', '.', '.', '.', '+', '.'],
    ['.', '+', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '+', '+', '.', '+', '+', '.', '.']
]

var gameu = new Field(userField, 'user')
gameu.render();

var gamec = new Field(compField, 'comp')
gamec.render();