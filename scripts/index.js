
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

const popup = document.querySelector('.popup');
const popupFormElement = popup.querySelector('.popup__form');
const popupFormNameInput = popup.querySelector('.popup__input_type_name');
const popupFormJobInput = popup.querySelector('.popup__input_type_profession');

const editButton = document.querySelector('.profile__edit-button');
const closeButton = popup.querySelector('.popup__button-close');

const profileNameElement = document.querySelector('.profile__name');
const jobNameElement = document.querySelector('.profile__text');

const addPlacePopup = document.querySelector(".popup_new-place")
const addPlaceButton = document.querySelector(".profile__add-button");
const addPlaceForm = addPlacePopup.querySelector(".popup__form")
const addPlaceNameInput = addPlacePopup.querySelector(".popup__input_type_name");
const addPlaceLinkInput = addPlacePopup.querySelector(".popup__input_type_link");

const closeAddPlaceButton = addPlacePopup.querySelector(".popup__button-close");

const elements = document.querySelector(".elements");
const elementTemplate = document.querySelector("#element-template").content;

const fullImagePopup = document.querySelector(".popup_places");

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
        closeAddPlacePopup();
        closeImagePopup();
    }
}

function isProfileInfoValid(jobName, profileName) {
    return jobName.trim() !== "" && profileName.trim() !== "";
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

const openAddPlacePopup = () => {
    addPlacePopup.classList.add("popup_opened");
};

const closeAddPlacePopup = () => {
    addPlacePopup.classList.remove("popup_opened");
};

const handleAddPlaceButtonClick = () => {
    openAddPlacePopup();
};

const handleCloseAddPlaceButtonClick = () => {
    closeAddPlacePopup();
};

const deleteCard = (cardElement) => {
    cardElement.remove();
};

const handleDeleteCardButtonClick = (evt) => {
    const cardElement = evt.target.closest(".element");
    deleteCard(cardElement);
};

const likeCard = (cardElement) => {
    const cardLikeButton = cardElement.querySelector(".element__button-like");
    cardLikeButton.classList.toggle("element__button-like_type_active");
};

const handleLikeCardButtonClick = (evt) => {
    const cardElement = evt.target.closest(".element");
    likeCard(cardElement);
};

const openImagePopup = () => {
    fullImagePopup.classList.add("popup_opened");
};

const closeImagePopup = () => {
    fullImagePopup.classList.remove("popup_opened");
};

const handleCloseImagePopupButtonClick = () => {
    closeImagePopup();
};

function handleImagePopupOverlayClick(event) {
    if (event.target === event.currentTarget) {
        closeImagePopup();
    }
};

const getNewImagePopup = (name, link) => {
    const popupImage = document.querySelector(".popup__picture");
    const popupName = document.querySelector(".popup__image-caption");

    popupImage.src = `${link}`;
    popupName.textContent = `${name}`;

    const popupCloseButton = fullImagePopup.querySelector(".popup__button-close");
    popupCloseButton.addEventListener("click", handleCloseImagePopupButtonClick);

    fullImagePopup.addEventListener("click", handleImagePopupOverlayClick);

    return fullImagePopup;
};

const handleCardImageClick = (evt) => {
    const cardElement = evt.target.closest(".element");
    const cardName = cardElement.querySelector(".element__text").textContent;
    const cardImageLink = cardElement.querySelector(".element__picture").src;

    const imagePopup = getNewImagePopup(cardName, cardImageLink);
    openImagePopup(imagePopup);
};

const getNewCardElement = (name, link) => {
    const cardElement = elementTemplate.querySelector(".element").cloneNode(true);

    const cardImage = cardElement.querySelector(".element__picture");
    const cardName = cardElement.querySelector(".element__text");
    const cardDeleteButton = cardElement.querySelector(".element__button-delete");
    const cardLikeButton = cardElement.querySelector(".element__button-like");

    cardImage.src = link;
    cardName.textContent = name;
    cardImage.addEventListener("click", handleCardImageClick);
    cardDeleteButton.addEventListener("click", handleDeleteCardButtonClick);
    cardLikeButton.addEventListener("click", handleLikeCardButtonClick);

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

const isCardInfoValid = (name, link) => {
    return name.trim() !== "" && link.trim() !== "";
};

const handleAddPlaceFormSubmit = (evt) => {
    evt.preventDefault();

    const cardName = addPlaceNameInput.value;
    const cardLink = addPlaceLinkInput.value;

    if (isCardInfoValid(cardName, cardLink)) {
        createCard(cardName, cardLink);
    }

    closeAddPlacePopup();
};

createCards(initialCards.reverse());

editButton.addEventListener("click", handleEditButtonClick);
closeButton.addEventListener("click", handleCloseButtonClick);
popup.addEventListener("click", handleOverlayClick);
popupFormElement.addEventListener('submit', handleFormSubmit);

addPlaceButton.addEventListener("click", handleAddPlaceButtonClick);
closeAddPlaceButton.addEventListener("click", handleCloseAddPlaceButtonClick);
addPlacePopup.addEventListener("click", handleOverlayClick);
addPlaceForm.addEventListener("submit", handleAddPlaceFormSubmit);
