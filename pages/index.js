
import Card from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
// import Popup from './Popup.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
import {
    initialCards,
    containerSelector,
    popupFormElement,
    popupFormNameInput,
    popupFormJobInput,
    editButton,
    profileNameElement,
    jobNameElement,
    buttonAddCard,
    formAddCard,
    nameInputAddCard,
    linkInputAddCard,
    popupImage,
    popupName,
    validationOptions,
    profilePopupSelector,
    popupAddCardSelector,
    fullImagePopupSelector
} from '../components/constants.js';

const userInfo = new UserInfo({
    nameSelector: '.profile__name', jobSelector: '.profile__text'
});

const popupEdit = new PopupWithForm(profilePopupSelector, ({ name, job }) => {
    userInfo.setUserInfo(name, job);
    popupEdit.close();
});
popupEdit.setEventListeners();

const popupAddPlace = new PopupWithForm(popupAddCardSelector, ({ name, link }) => {
    cardsSection.addItem({ name, link });
    cardsSection.render();
    popupAddPlace.close();
});
popupAddPlace.setEventListeners();

const imagePopup = new PopupWithImage(fullImagePopupSelector);
imagePopup.setEventListeners();

const mainListCardRenderer = (item) => {
    const card = new Card(item, handleCardClick);
    return card.render();
};

const handleCardClick = (name, link) => {
    popupImage.setAttribute("alt", name);
    popupImage.setAttribute("src", link);
    popupName.textContent = name;
    imagePopup.open();
};

// const addCardToMainList = (card) => {
//     const cardElement = card.render();
//     container.prepend(cardElement);
// };

const cards = initialCards.map(initialCards => {
    const card = new Card({ initialCards }, handleCardClick);

});

const profileFormValidator = new FormValidator(validationOptions, popupFormElement);
const addPlaceFormValidator = new FormValidator(validationOptions, formAddCard);

const cardsSection = new Section({ items: initialCards, renderer: mainListCardRenderer }, containerSelector);

// const editProfile = () => {
//     popupFormJobInput.value = jobNameElement.textContent;
//     popupFormNameInput.value = profileNameElement.textContent;
// }

const handleEditButtonClick = () => {
    const { name, job } = userInfo.getUserInfo();
    // userInfo.setUserInfo();
    popupFormNameInput.value = name;
    popupFormJobInput.value = job;

    profileFormValidator.resetValidation();
    popupEdit.open();
}

const handleAddPlaceButtonClick = () => {
    formAddCard.reset();
    addPlaceFormValidator.resetValidation();
    popupAddPlace.open();
};

// function setImagePopup(name, link) {
//     popupImage.src = link;
//     popupName.textContent = name;
//     popupImage.alt = name;
// };

// const handleAddPlaceFormSubmit = ({ name, link }) => {
//     cardsSection.addItem({ name, link });

//     popupAddPlace.close();
//     cardsSection.render();
// };

cardsSection.render();

editButton.addEventListener("click", handleEditButtonClick);

// popupFormElement.addEventListener('submit', submitEditProfileForm);

profileFormValidator.enableValidation();

buttonAddCard.addEventListener("click", handleAddPlaceButtonClick);

// formAddCard.addEventListener("submit", handleAddPlaceFormSubmit);
// popupImage.addEventListener('click', handleCardClick);

addPlaceFormValidator.enableValidation();
