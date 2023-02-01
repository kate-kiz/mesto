const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__button-close');

function toggleOpenPopup() {
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

editButton.addEventListener("click", handleEditButtonClick);
closeButton.addEventListener("click", handleCloseButtonClick);
popup.addEventListener("click", handleOverlayClick);