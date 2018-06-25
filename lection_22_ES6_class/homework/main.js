class Element {
    constructor(selector) {
        this.selector = document.createElement(selector);
        
        document.body.appendChild(this.selector);
        
    }
    html(text) {
        this.selector.innerHtml = text;
        // this.writeElem();
    }
    // writeElem () {
    //     debugger
    // }
}
var elem = new Element('div');
elem.html('!')