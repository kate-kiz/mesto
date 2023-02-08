const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__button-close');

const popup = document.querySelector('.popup');
const popupFormElement = document.querySelector('.popup__form');
const popupFormNameInput = document.querySelector('.popup__input_type_name');
const popupFormJobInput = document.querySelector('.popup__input_type_profession');

const profileNameElement = document.querySelector('.profile__name');
const jobNameElement = document.querySelector('.profile__text');

function openPopup() {
    popup.classList.add("popup_opened");
}

function editProfile() {
    popupFormJobInput.value = jobNameElement.textContent;
    popupFormNameInput.value = profileNameElement.textContent;
}

function handleEditButtonClick() {
    editProfile();
    openPopup();
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

function handleCloseButtonClick() {
    closePopup();
}

function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
        closePopup();
    }
}

function isProfileInfoValid(jobName, profileName) {
    if (jobName.trim() === "") return false;
    if (profileName.trim() === "") return false;

    return true;
}

function handleFormSubmit(evt) {
    evt.preventDefault();

    const jobName = popupFormJobInput.value;
    const profileName = popupFormNameInput.value;

    if (!isProfileInfoValid(jobName, profileName)) return;

    profileNameElement.textContent = profileName;
    jobNameElement.textContent = jobName;

    closePopup();
}

editButton.addEventListener("click", handleEditButtonClick);
closeButton.addEventListener("click", handleCloseButtonClick);
popup.addEventListener("click", handleOverlayClick);
popupFormElement.addEventListener('submit', handleFormSubmit);
