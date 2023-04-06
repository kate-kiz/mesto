import Popup from "./Popup.js";

class PopupWithForm extends Popup {
    constructor(PopupSelector, submitCallback) {
        super(PopupSelector);
        this._submitCallback = submitCallback;
        this.nameInput = this._popup.querySelector('.popup__input_type_name');
        this.jobInput = this._popup.querySelector('.popup__input_type_profession');
        this.linkInput = this._popup.querySelector('.popup__input_type_link');
    };

    _getInputValue() {
        return {
            name: this.nameInput.value,
            job: this.jobInput?.value,
            link: this.linkInput?.value,
        }
    };

    _clearInput() {
        this.nameInput.value = '';
        if (this.jobInput) {
            this.jobInput.value = '';
        }
        if (this.linkInput) {
            this.linkInput.value = '';
        }
    };

    setEventListeners() {
        super.setEventListeners();
        this._form = this._popup.querySelector('.popup__form');
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitCallback(this._getInputValue());
        });
    };

    close() {
        super.close();
        this._clearInput();
    };
}

export default PopupWithForm;