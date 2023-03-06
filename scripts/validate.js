
const hiddenError = (inputElement, errorElement, validationOptions) => {
    errorElement.textContent = '';
    errorElement.classList.remove(validationOptions.errorClass);
    inputElement.classList.remove(validationOptions.inputErrorClass);
};

const showError = (inputElement, errorElement, validationMessage, validationOptions) => {
    errorElement.textContent = validationMessage;
    errorElement.classList.add(validationOptions.errorClass);
    inputElement.classList.add(validationOptions.inputErrorClass);
};

const setInputState = (inputElement, isValid, validationOptions) => {
    const inputSectionElement = inputElement.closest(validationOptions.inputSectionSelector);
    const errorElement = inputSectionElement.querySelector(validationOptions.inputErrorSelector);
    if (isValid && errorElement) {
        hiddenError(inputElement, errorElement, validationOptions);
    } else if (errorElement) {
        showError(inputElement, errorElement, inputElement.validationMessage, validationOptions);
    }
};

const toggleInputState = (inputElement, validationOptions) => {
    const isValid = inputElement.validity.valid;
    setInputState(inputElement, isValid, validationOptions);
};

const enableButton = (buttonElement, inactiveButtonClass) => {
    buttonElement.removeAttribute('disabled', '');
    buttonElement.classList.remove(inactiveButtonClass);
};

const disableButton = (buttonElement, inactiveButtonClass) => {
    buttonElement.setAttribute('disabled', false);
    buttonElement.classList.add(inactiveButtonClass);
};

const toggleButtonState = (inputs, submitButton, inactiveButtonClass) => {
    const formIsValid = inputs.every(inputElement => inputElement.validity.valid);

    if (formIsValid) {
        enableButton(submitButton, inactiveButtonClass);
    } else {
        disableButton(submitButton, inactiveButtonClass);
    }
};

const setEventListeners = (form, validationOptions) => {
    const submitButton = form.parentNode.querySelector(validationOptions.submitButtonSelector);
    const inputs = Array.from(form.querySelectorAll(validationOptions.inputSelector));

    inputs.forEach(inputElement => {
        inputElement.addEventListener('input', () => {
            toggleInputState(inputElement, validationOptions);
            toggleButtonState(inputs, submitButton, validationOptions.inactiveButtonClass);
        });
    });
};

const enableValidation = (validationOptions) => {
    const forms = Array.from(document.querySelectorAll(validationOptions.formSelector));
    forms.forEach(form => {
        setEventListeners(form, validationOptions);
    });
};

