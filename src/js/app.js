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

function multiply() {
  let total = 1;

  for (const argument of arguments) {
    total *= argument;
  }

  return total;
}

console.log(multiply(1, 2, 3)); //  6
console.log(multiply(1, 2, 3, 4)); //  10
console.log(multiply(1, 2, 3, 4, 5)); //  15
