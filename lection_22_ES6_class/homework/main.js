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

        var count = 0;
        var firedItems = [];

        this.fire = (target) => {
            if (target.classList.contains('sheep')) {
                target.classList.add('broken');
            } else {
                target.classList.add('missed');
                count += 1;
            }
            this.backFire();
        }

        this.backFire = () => {
            // функция устанавливает значение на поле юзера
            var targets = document.querySelectorAll('#field-user div');
            var sheeps = Object.keys(targets).filter((key) => {
                return targets[key].className == 'sheep';
            });

            if (count == 1 && sheeps.length > 0) {
                let firedItemIndex = Math.floor(Math.random() * targets.length);
                this.fire(targets[firedItemIndex]);
                count = 0;
            }

            if (sheeps.length === 0) {
                alert('You LOST')
            }
        }
    }

    render() {
        var fieldBlock = document.getElementById('field-' + this.role)
        for (let i = 0; i < this.field.length; i++) {
            for (let j = 0; j < this.field[i].length; j++) {
                var block = document.createElement('div');
                if (this.field[i][j] === '+') {
                    block.classList.add('sheep');
                };
                if (this.role === 'comp') {
                    block.addEventListener('click', (event) => this.fire(event.target));
                };
                fieldBlock.appendChild(block)
            }
        }
    }
}

const userField = [
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '+', '+', '+', '.', '.', '+', '+'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '+', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '+', '+', '+'],
    ['.', '.', '.', '.', '+', '.', '.', '.', '.', '.'],
    ['+', '.', '.', '.', '+', '.', '+', '+', '.', '.'],
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