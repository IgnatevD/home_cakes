const listCakes = document.querySelector('.list-cakes');
const modalOpen = document.querySelector('.js-lightbox');
const modalBd = document.querySelector('.lightbox__overlay');
const modalClose = document.querySelector('.lightbox__button');

listCakes.addEventListener(`click`, openMobalBd);
modalBd.addEventListener(`click`, closeMobalBd);
modalClose.addEventListener(`click`, deleteClassIsOpen);

function openMobalBd(e) {
  if (e.target.nodeName !== 'BUTTON') return;
  modalOpen.classList.add(`is-open`);
}

function deleteClassIsOpen() {
  modalOpen.classList.remove(`is-open`);
}

function closeMobalBd(e) {
  if (e.currentTarget === e.target) {
    deleteClassIsOpen();
  }
}
