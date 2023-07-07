// Получаем необходимые элементы
const editBtn = document.querySelector('.profile__edit-btn');
const popup = document.querySelector('.popup');
const popupNameInput = document.querySelector('.popup__input_type_name');
const popupAboutInput = document.querySelector('.popup__input_type_about');
const saveBtn = document.querySelector('.popup__save-btn');
const closeBtn = document.querySelector('.popup__close');
const profileName = document.querySelector('.profile__title');
const profileAbout = document.querySelector('.profile__subtitle');

// Функция открытия попапа
function openPopup() {
  popup.classList.add('popup_opened');
  popupNameInput.value = profileName.textContent;
  popupAboutInput.value = profileAbout.textContent;
}

// Функция закрытия попапа
function closePopup() {
  popup.classList.remove('popup_opened');
}

// Функция сохранения данных
function saveData(event) {
  event.preventDefault(); // Предотвращаем отправку формы (перезагрузку страницы)

  profileName.textContent = popupNameInput.value;
  profileAbout.textContent = popupAboutInput.value;

  closePopup();
}

// Назначаем обработчики событий
editBtn.addEventListener('click', openPopup);
closeBtn.addEventListener('click', closePopup);
saveBtn.addEventListener('click', saveData);
