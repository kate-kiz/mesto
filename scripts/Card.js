class Card {
    static _template = document.querySelector("#element-template").content;

    constructor(items, container) {
        this._items = items;
        this._container = container;
    }

    render() {
        this._view = Card._template.cloneNode(true).children[0];

        this._container.append(this._view);
    }

}

export default Card;
