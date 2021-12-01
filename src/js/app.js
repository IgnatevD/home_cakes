const listCakes = document.querySelector('.list-cakes');
const modalOpen = document.querySelector('.js-lightbox');
const modalClose = document.querySelector('.lightbox__button');

listCakes.addEventListener(`click`, openMobalBd);
modalClose.addEventListener(`click`, deleteClassIsOpen);

function openMobalBd(e) {
  if (e.target.nodeName !== 'BUTTON') return;
  modalOpen.classList.add(`is-open`);
}

function deleteClassIsOpen() {
  modalOpen.classList.remove(`is-open`);
}
