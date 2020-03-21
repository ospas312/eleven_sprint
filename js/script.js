
const cardContainer = document.querySelector('.places-list');
const infoName = document.querySelector('.user-info__name');
const infoJob = document.querySelector('.user-info__job');
const infoAvatar = document.querySelector('.user-info__photo');
const formEdit = document.forms.edit;
const formNew = document.forms.new;
const popupNew = document.querySelector('.popup__new');
const popupEdit = document.querySelector('.popup__edit');
const popupPhoto = document.querySelector('.popup__photo');
const popupProfile = document.querySelector('.popup');

const errorMessage = {
  noError: '',
  urlError: 'Здесь должна быть ссылка',
  valueError: 'Это обязательное поле',
  lenghtError: 'Должно быть от 2 до 30 символов',
};

const card = new Card();

const api = new Api({
  baseUrl: 'https://praktikum.tk/cohort8',
  headers: {
    authorization: 'fbaf30d0-2693-4ceb-9edd-835f22853e1d',
    'Content-Type': 'application/json'
  }
});

function resetForm(form) {
  form.reset();
  form.querySelectorAll('.error').forEach((elem) => elem.textContent = '');
  form.lastElementChild.setAttribute('disabled', true);
}

const formValidator = new FormValidator(errorMessage);
const userInfo = new UserInfo(formEdit, infoName, infoJob, api);

const popup = new Popup(formValidator, userInfo, popupNew, popupEdit,
  resetForm, formEdit, formNew, popupPhoto);
const cardList = new CardList(cardContainer, api, card.create, popup.close);
userInfo.loadUserInfo();
cardList.render();

formNew.addEventListener('submit', (event) => cardList.addCard(event));

formEdit.addEventListener('submit', (event) => {
  event.preventDefault();
  userInfo.updateUserInfo()
    .then(() => {
      popup.close(event);
    })
    .catch(() => {
      alert('Ой беда в огороде лебеда');
      throw (" Ого, ошибка! o_O");
    });

});


document.addEventListener('click', popup.close);
document.addEventListener('click', (event) => popup.open(event));
cardContainer.addEventListener('click', card.likeIcon);
cardContainer.addEventListener('click', card.remove);











/*
formEdit.addEventListener('submit', (event) => {
  event.preventDefault();
  api.sendUserInfo(infoName.textContent, infoJob.textContent)
      .then(() =>{
        infoName.textContent = formEdit.user.value;
        infoJob.textContent = formEdit.job.value;
        popup.close(event);
      });

});*/

/*
Promise.all([
  api.getUserInfo(),
])
  .then(([user])=>{
    userInfo.setUserInfo(user.name, user.about)
    //userInfo.updateUserInfo()
  })*/
