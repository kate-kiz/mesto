
import Card from './Card.js';
import { FormValidator } from './FormValidator.js';

const initialCards = [
    {
        name: 'Гейзерное озеро',
        link: './images/nick-night-p9O_YJIZC7g-unsplash.jpg'
    },
    {
        name: 'Акташ',
        link: './images/shtabnykh_photo-5Ilhgwb5kHE-unsplash.jpg'
    },
    {
        name: 'Актуру',
        link: './images/shtabnykh_photo-p_K4bhYcHvs-unsplash.jpg'
    },
    {
        name: 'Каракольские озера',
        link: './images/nick-night-aADqJK3x8qE-unsplash.jpg'
    },
    {
        name: 'Катунь',
        link: './images/shtabnykh_photo-RfzgBkOsmWQ-unsplash.jpg'
    },
    {
        name: 'Чике-Таман',
        link: './images/alexander-dobry-0rKI8jvuJm0-unsplash.jpg'
    },
];

const container = document.querySelector(".elements");

const handleCardClick = (name, link) => {
    popupImage.setAttribute("alt", name);
    popupImage.setAttribute("src", link);
    popupName.textContent = name;
    openPopup(fullImagePopup);
};

const addCardToMainList = (card) => {
    const cardElement = card.render();
    // const cards = initialCards.map(initialCard => new Card(initialCard, container, handleCardClick));
    container.prepend(cardElement);
};

const cards = initialCards.map(initialCards => {
    const card = new Card(initialCards, container, handleCardClick);
    addCardToMainList(card);
});

// cards.forEach(card => addCardToMainList(card));

const profilePopup = document.querySelector('.popup_edit-profile');
const popupFormElement = profilePopup.querySelector('.popup__form');
const popupFormNameInput = profilePopup.querySelector('.popup__input_type_name');
const popupFormJobInput = profilePopup.querySelector('.popup__input_type_profession');

const editButton = document.querySelector('.profile__edit-button');
const closeButton = profilePopup.querySelector('.popup__button-close');

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

const popups = document.querySelectorAll('.popup');

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

const profileFormValidator = new FormValidator(validationOptions, popupFormElement);
const addPlaceFormValidator = new FormValidator(validationOptions, formAddCard);

popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup)
        }
        if (evt.target.classList.contains('popup__button-close')) {
            closePopup(popup)
        }
    })
});

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
    profileFormValidator.resetValidation();
    openPopup(profilePopup);
}

function closePopup(popupElement) {
    popupElement.classList.remove('popup_opened');
    document.removeEventListener('keydown', handleEscape);
}

// function handleCloseButtonClick() {
//     closePopup(profilePopup);
// }

// function handleOverlayClick(event) {
//     closePopup(event.target);
// }

function submitEditProfileForm(evt) {
    evt.preventDefault();

    const jobName = popupFormJobInput.value;
    const profileName = popupFormNameInput.value;

    profileNameElement.textContent = profileName;
    jobNameElement.textContent = jobName;

    closePopup(profilePopup);
}

const handleAddPlaceButtonClick = () => {
    formAddCard.reset();
    addPlaceFormValidator.resetValidation();
    openPopup(popupAddCard);
};

// const handleCloseAddPlaceButtonClick = () => {
//     closePopup(popupAddCard);
// };

// const handleCloseImagePopupButtonClick = () => {
//     closePopup(fullImagePopup);
// };

// function setImagePopup(name, link) {
//     popupImage.src = link;
//     popupName.textContent = name;
//     popupImage.alt = name;
// };

const handleAddPlaceFormSubmit = (evt) => {
    evt.preventDefault();

    const newCard = new Card({ name: nameInputAddCard.value, link: linkInputAddCard.value }, container, handleCardClick);
    addCardToMainList(newCard);

    closePopup(popupAddCard);
};

editButton.addEventListener("click", handleEditButtonClick);
// closeButton.addEventListener("click", handleCloseButtonClick);
// profilePopup.addEventListener("click", handleOverlayClick);
popupFormElement.addEventListener('submit', submitEditProfileForm);

profileFormValidator.enableValidation();

buttonAddCard.addEventListener("click", handleAddPlaceButtonClick);
// closeButtonAddCard.addEventListener("click", handleCloseAddPlaceButtonClick);
// popupAddCard.addEventListener("click", handleOverlayClick);
formAddCard.addEventListener("submit", handleAddPlaceFormSubmit);
// popupImage.addEventListener('click', handleCardClick);

addPlaceFormValidator.enableValidation();

// popupCloseButton.addEventListener("click", handleCloseImagePopupButtonClick);
// fullImagePopup.addEventListener("click", handleCardClick);
