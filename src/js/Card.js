export class Card {
  likeIcon() {
    if (event.target.classList.contains('place-card__like-icon')) {
      event.target.classList.toggle('place-card__like-icon_liked');
    }
  }
  remove() {
    if (event.target.classList.contains('place-card__delete-icon')) {
      event.target.parentElement.parentElement.remove();
    }
  }
  create(name, link) {
    const card = document.createElement('div');
    const cardImage = document.createElement('div');
    const buttonDelete = document.createElement('button');
    const cardDescription = document.createElement('div');
    const cardName = document.createElement('h3');
    const cardLike = document.createElement('button');

    card.classList.add('place-card');
    cardImage.classList.add('place-card__image');
    cardImage.style.backgroundImage = 'url(' + link + ')';
    buttonDelete.classList.add('place-card__delete-icon');
    cardDescription.classList.add('place-card__description');
    cardName.classList.add('place-card__name')
    cardName.textContent = name;
    cardLike.classList.add('place-card__like-icon');


    card.appendChild(cardImage);
    card.appendChild(cardDescription);
    cardImage.appendChild(buttonDelete);
    cardDescription.appendChild(cardName);
    cardDescription.appendChild(cardLike);

    return card;
  }
}
