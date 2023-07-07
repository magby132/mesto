
const editBtn = document.querySelector('.profile__edit-btn');
const popup = document.querySelector('.popup');
const popupNameInput = document.querySelector('.popup__input_type_name');
const popupAboutInput = document.querySelector('.popup__input_type_about');
const saveBtn = document.querySelector('.popup__save-btn');
const closeBtn = document.querySelector('.popup__close');
const profileName = document.querySelector('.profile__title');
const profileAbout = document.querySelector('.profile__subtitle');

function openPopup() {
  popup.classList.add('popup_opened');
  popupNameInput.value = profileName.textContent;
  popupAboutInput.value = profileAbout.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function saveData(event) {
  event.preventDefault(); 
  profileName.textContent = popupNameInput.value;
  profileAbout.textContent = popupAboutInput.value;

  closePopup();
}

editBtn.addEventListener('click', openPopup);
closeBtn.addEventListener('click', closePopup);
saveBtn.addEventListener('click', saveData);
