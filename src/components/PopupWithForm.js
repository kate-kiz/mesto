import Popup from "./Popup.js";

class PopupWithForm extends Popup {
    constructor({ PopupSelector, submitCallback }) {
        super(PopupSelector);
        this._submitCallback = submitCallback;
        this._form = this._popup.querySelector('.popup__form');
        this._inputs = this._popup.querySelectorAll('.popup__input');
        this.nameInput = this._popup.querySelector('.popup__input_type_name');
        this.jobInput = this._popup.querySelector('.popup__input_type_profession');
        this.linkInput = this._popup.querySelector('.popup__input_type_link');
        this._button = this._popup.querySelector('.popup__button');
    };

    _getInputValue() {
        this._formValues = {};
        this._inputs.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        console.log(this._formValues);
        return this._formValues;
    };

    setInputValue(item) {
        this._inputs.forEach(input => {
            console.log(item);
            input.value = item[input.name];
        });
    };

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitCallback(this._getInputValue());
        });
    };

    close() {
        super.close();
        this._form.reset();
    };
    
    renderLoading(isLoading) {
        if(isLoading) {
            this._button.textContent = 'Сохранение...';
        } else {
            this._button.textContent = 'Сохранить';
        }
    };
}

export default PopupWithForm;