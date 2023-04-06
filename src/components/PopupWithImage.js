import Popup from "./Popup.js";

class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    };

    open(name, link) {
        this._popup.querySelector('.popup__image-caption').textContent = name;
        this._popup.querySelector('.popup__picture').alt = name;
        this._popup.querySelector('.popup__picture').src = link;
        super.open();
    };
}

export default PopupWithImage; 