class Popup {
  constructor(validation, userInfo, popupNew, popupEdit, resetForm, formEdit, formNew, popupPhoto) {
    this.validation = validation;
    this.userInfo = userInfo;
    this.popupEdit = popupEdit;
    this.popupNew = popupNew;
    this.resetForm = resetForm;
    this.formEdit = formEdit;
    this.formNew = formNew;
    this.popupPhoto = popupPhoto;
  }

  open(event) {

    if (event.target.closest('.user-info__button')) {
      this.resetForm(this.formNew);
      this.validation.setEventListeners(this.popupNew);
      this.popupNew.classList.add('popup_is-opened');
      return;
    }
    if (event.target.closest('.user-info__button_edit')) {
      this.resetForm(this.formEdit);
      this.userInfo.setUserInfo();
      this.validation.setEventListeners(this.popupEdit);
      this.popupEdit.classList.add('popup_is-opened');
      return;
    }
    if (event.target.classList.contains('place-card__image')) {
      const image = event.target.style.backgroundImage.slice(5, -2);
      this.popupPhoto.querySelector('.popup__image').setAttribute('src', image);
      this.popupPhoto.classList.add('popup_is-opened');
      return;
    }
  }
  close(event) {
    if (event.type === 'submit' || event.key === 'Escape') {
      event.target.closest('.popup').classList.remove('popup_is-opened');
    }
    if (event.target.classList.contains('popup_is-opened') || event.target.classList.contains('popup__close')) {
      event.target.closest('.popup').classList.remove('popup_is-opened');
    }
  }
}