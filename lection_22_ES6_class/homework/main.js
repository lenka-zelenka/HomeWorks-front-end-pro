class Element {
    constructor(selector) {
        this.selector = document.createElement(selector);

    }
    //запишет в текст элемента '!'
    html(text) {
        this.selector.innerText += text;
    }
    // запишет в начало элемента '!'
    append(text) {
        document.body.appendChild(this.selector)
    }
    prepend(text) {
        // this.selector.insertBefore(this.selector, text)
    }
}
var elem = new Element('div');
elem.html('!')//запишет в текст элемента '!'
elem.append('!'); //запишет в начало элемента '!'
elem.prepend('!'); //запишет в конец элемента '!'
// elem.attr('class', 'www'); //запишет в атрибут class значение www
// 
// Должны работать цепочки методов:
// elem.html('hello').append('!').prepend('!');
// elem.attr('class', 'www').attr('title', 'hello');