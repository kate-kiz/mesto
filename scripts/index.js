const popup = document.querySelector('.popup_edit-profile');
const popupFormElement = popup.querySelector('.popup__form');
const popupFormNameInput = popup.querySelector('.popup__input_type_name');
const popupFormJobInput = popup.querySelector('.popup__input_type_profession');

const editButton = document.querySelector('.profile__edit-button');
const closeButton = popup.querySelector('.popup__button-close');
const addButton = document.querySelector('.profile__add-button');

const profileNameElement = document.querySelector('.profile__name');
const jobNameElement = document.querySelector('.profile__text');

const popupAddCard = document.querySelector(".popup_new-place")
const buttonAddCard = document.querySelector(".profile__add-button");
const formAddCard = popupAddCard.querySelector(".popup__form")
const nameInputAddCard = popupAddCard.querySelector(".popup__input_type_name");
const linkInputAddCard = popupAddCard.querySelector(".popup__input_type_link");
const closeButtonAddCard = popupAddCard.querySelector(".popup__button-close");

const fullImagePopup = document.querySelector(".popup_places");
const popupImage = document.querySelector(".popup__picture");
const popupName = document.querySelector(".popup__image-caption");
const popupCloseButton = fullImagePopup.querySelector(".popup__button-close");

const elements = document.querySelector(".elements");
const elementTemplate = document.querySelector("#element-template").content;

const validationOptions = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inputSectionSelector: '.popup__section',
    inputErrorSelector: '.popup__error',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible',
};

function handleEscape(evt) {
    if (evt.key === 'Escape') {
        const activePopup = document.querySelector(".popup_opened");
        closePopup(activePopup);
    }
}

function openPopup(popupElement) {
    popupElement.classList.add("popup_opened");
    document.addEventListener('keydown', handleEscape);
}

function editProfile() {
    popupFormJobInput.value = jobNameElement.textContent;
    popupFormNameInput.value = profileNameElement.textContent;
}

function handleEditButtonClick() {
    editProfile();
    resetErrors(popupFormElement, validationOptions);
    openPopup(popup);
}

function closePopup(popupElement) {
    popupElement.classList.remove('popup_opened');
    document.removeEventListener('keydown', handleEscape);
}

function handleCloseButtonClick() {
    closePopup(popup);
}

function handleOverlayClick(event) {
    const activePopup = document.querySelector(".popup_opened");
    if (event.target === activePopup) {
        closePopup(activePopup);
    }
}

// function isProfileInfoValid(jobName, profileName) {
//     return jobName.trim() !== "" && profileName.trim() !== "";
// }

function submitEditProfileForm(evt) {
    evt.preventDefault();

    const jobName = popupFormJobInput.value;
    const profileName = popupFormNameInput.value;

    profileNameElement.textContent = profileName;
    jobNameElement.textContent = jobName;

    closePopup(popup);
}

const handleAddPlaceButtonClick = () => {
    formAddCard.reset();
    resetErrors(formAddCard, validationOptions);
    openPopup(popupAddCard);
};

const handleCloseAddPlaceButtonClick = () => {
    closePopup(popupAddCard);
};

const deleteCard = (cardElement) => {
    cardElement.remove();
};

const handleDeleteCardButtonClick = (evt) => {
    const cardElement = evt.target.closest(".element");
    deleteCard(cardElement);
};

const likeCard = (cardElement) => {
    const buttonLikeCard = cardElement.querySelector(".element__button-like");
    buttonLikeCard.classList.toggle("element__button-like_type_active");
};

const handleLikeCardButtonClick = (evt) => {
    const cardElement = evt.target.closest(".element");
    likeCard(cardElement);
};

const handleCloseImagePopupButtonClick = () => {
    closePopup(fullImagePopup);
};

const setImagePopup = (name, link) => {
    popupImage.src = `${link}`;
    popupName.textContent = `${name}`;
    popupImage.alt = `${name}`;
};

const handleCardImageClick = (name, link) => {
    setImagePopup(name, link);
    openPopup(fullImagePopup);
};

const getNewCardElement = (name, link) => {
    const cardElement = elementTemplate.querySelector(".element").cloneNode(true);

    const cardImage = cardElement.querySelector(".element__picture");
    const cardName = cardElement.querySelector(".element__text");
    const cardDeleteButton = cardElement.querySelector(".element__button-delete");
    const buttonLikeCard = cardElement.querySelector(".element__button-like");

    cardImage.src = link;
    cardName.textContent = name;
    cardImage.addEventListener("click", () => handleCardImageClick(name, link));
    cardDeleteButton.addEventListener("click", handleDeleteCardButtonClick);
    buttonLikeCard.addEventListener("click", handleLikeCardButtonClick);

    return cardElement;
};

const createCard = (name, link) => {
    elements.prepend(getNewCardElement(name, link));
};

const createCards = (cards) => {
    cards.forEach(({ name, link }) => {
        createCard(name, link);
    });
};

// const isCardInfoValid = (name, link) => {
//     return name.trim() !== "" && link.trim() !== "";
// };

const handleAddPlaceFormSubmit = (evt) => {
    evt.preventDefault();

    const cardName = nameInputAddCard.value;
    const cardLink = linkInputAddCard.value;

    createCard(cardName, cardLink);

    closePopup(popupAddCard);
};

createCards(initialCards.reverse());

editButton.addEventListener("click", handleEditButtonClick);
closeButton.addEventListener("click", handleCloseButtonClick);
popup.addEventListener("click", handleOverlayClick);
popupFormElement.addEventListener('submit', submitEditProfileForm);

buttonAddCard.addEventListener("click", handleAddPlaceButtonClick);
closeButtonAddCard.addEventListener("click", handleCloseAddPlaceButtonClick);
popupAddCard.addEventListener("click", handleOverlayClick);
formAddCard.addEventListener("submit", handleAddPlaceFormSubmit);

popupCloseButton.addEventListener("click", handleCloseImagePopupButtonClick);
fullImagePopup.addEventListener("click", handleOverlayClick);

enableValidation(validationOptions);
