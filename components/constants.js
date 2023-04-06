
export const initialCards = [
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

export const containerSelector = ".elements";
export const popupSelector = ".popup";
export const profilePopupSelector = '.popup_edit-profile';
export const profilePopup = document.querySelector(profilePopupSelector);
export const popupFormElement = profilePopup.querySelector('.popup__form');
export const popupFormNameInput = profilePopup.querySelector('.popup__input_type_name');
export const popupFormJobInput = profilePopup.querySelector('.popup__input_type_profession');

export const editButton = document.querySelector('.profile__edit-button');

export const profileNameElement = document.querySelector('.profile__name');
export const jobNameElement = document.querySelector('.profile__text');


export const popupAddCardSelector = ".popup_new-place";
export const popupAddCard = document.querySelector(popupAddCardSelector);
export const buttonAddCard = document.querySelector(".profile__add-button");
export const formAddCard = popupAddCard.querySelector(".popup__form")
export const nameInputAddCard = popupAddCard.querySelector(".popup__input_type_name");
export const linkInputAddCard = popupAddCard.querySelector(".popup__input_type_link");

export const fullImagePopupSelector = ".popup_places";
export const fullImagePopup = document.querySelector(fullImagePopupSelector);
export const popupImage = document.querySelector(".popup__picture");
export const popupName = document.querySelector(".popup__image-caption");

// export const popups = document.querySelectorAll('.popup');

export const validationOptions = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inputSectionSelector: '.popup__section',
    inputErrorSelector: '.popup__error',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible',
};
