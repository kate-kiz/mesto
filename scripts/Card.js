// import { openPopup, setImagePopup } from "./index.js";


class Card {
    static _template = document.querySelector("#element-template").content;

    constructor(items, container, handleCardClick) {
        this._name = items.name;
        this._link = items.link;
        this._container = container;
        this._view = Card._template.cloneNode(true).children[0];
        this._cardImage = this._view.querySelector(".element__picture");
        this._cardName = this._view.querySelector(".element__text");
        this._buttonLikeCard = this._view.querySelector(".element__button-like");
        this._cardDeleteButton = this._view.querySelector(".element__button-delete");
        this._fullImagePopup = document.querySelector(".popup_places");
        this._handleCardClick = handleCardClick;
    };

    // _clickCardImage() {
    //     setImagePopup(this._name, this._link);
    //     openPopup(this._fullImagePopup);
    // };

    _likeCard() {
        this._buttonLikeCard.classList.toggle("element__button-like_type_active");
    };

    _deleteCard() {
        this._cardDeleteButton.closest(".element").remove();
    };

    _setEventListeners() {
        this._cardImage.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link);
        });

        // this._handleCardClick(this._name, this._link) = this._handleCardClick.bind(this);

        this._cardDeleteButton.addEventListener("click", this._deleteCard.bind(this));

        this._buttonLikeCard.addEventListener("click", this._likeCard.bind(this));

        // this._cardImage.addEventListener("click", this._clickCardImage.bind(this));
    };

    _createCard() {
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this._cardName.textContent = this._name;

        this._setEventListeners();

        return this._view;
    };

    render() {
        return this._createCard();
    };

}

export default Card;

