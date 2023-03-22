import { openPopup, setImagePopup } from "./index.js";


class Card {
    static _template = document.querySelector("#element-template").content;

    constructor(items, container) {
        this._name = items.name;
        this._link = items.link;
        this._container = container;
        this._view = Card._template.cloneNode(true).children[0];
        this._buttonLikeCard = this._view.querySelector(".element__button-like");
        this._cardDeleteButton = this._view.querySelector(".element__button-delete");
    };

    _clickCardImage() {
        const fullImagePopup = document.querySelector(".popup_places");

        setImagePopup(this._name, this._link);
        openPopup(fullImagePopup);
    };

    _likeCard() {
        this._buttonLikeCard.classList.toggle("element__button-like_type_active");
    };

    _deleteCard() {
        this._cardDeleteButton.closest(".element").remove();
    };

    _createCard() {
        const cardImage = this._view.querySelector(".element__picture");
        const cardName = this._view.querySelector(".element__text");

        cardImage.src = this._link;
        cardImage.alt = this._name;
        cardName.textContent = this._name;

        this._cardDeleteButton.addEventListener("click", this._deleteCard.bind(this));
        this._buttonLikeCard.addEventListener("click", this._likeCard.bind(this));
        cardImage.addEventListener("click", this._clickCardImage.bind(this));

        return this._view;
    };

    render() {
        const newCard = this._createCard();

        this._container.prepend(newCard);
    };

}

export default Card;

