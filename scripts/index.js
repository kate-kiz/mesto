const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__button-close');

const popup = document.querySelector('.popup');
const popupFormElement = document.querySelector('.popup__form');
const popupFormNameInput = document.querySelector('.popup__input_type_name');
const popupFormJobInput = document.querySelector('.popup__input_type_profession');

const profileNamePlaceholder = document.querySelector('.profile__name');
const jobNamePlaceholder = document.querySelector('.profile__text');

editButton.addEventListener("click", handleEditButtonClick);
closeButton.addEventListener("click", handleCloseButtonClick);
popup.addEventListener("click", handleOverlayClick);


function toggleOpenPopup() {
    popupFormJobInput.value = jobNamePlaceholder.textContent
    popupFormNameInput.value = profileNamePlaceholder.textContent

    popup.classList.toggle("popup_opened");
}

function handleEditButtonClick() {
    toggleOpenPopup();
}

function handleCloseButtonClick() {
    toggleOpenPopup();
}

function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
        toggleOpenPopup();
    }
}

function isProfileInfoValid (jobName, profileName) {
    // if (jobName === "") return false;
    // if (profileName === "") return false;
    if (jobName.trim() === "") return false;
    if (profileName.trim() === "") return false;

    return true;
}

function handleFormSubmit (evt) {
    evt.preventDefault();

    const jobName = popupFormJobInput.value;
    const profileName = popupFormNameInput.value;

    if (!isProfileInfoValid(jobName, profileName)) return;

    profileNamePlaceholder.textContent = profileName;
    jobNamePlaceholder.textContent = jobName;

    toggleOpenPopup();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
popupFormElement.addEventListener('submit', handleFormSubmit);
