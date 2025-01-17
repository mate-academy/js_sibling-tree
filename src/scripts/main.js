'use strict';

const allLi = document.querySelectorAll('li');

const tree = document.querySelector('.tree');

allLi.forEach((li) => {
  const span = document.createElement('span');

  if (li.firstElementChild) {
    span.textContent = li.firstChild.textContent;

    li.firstChild.textContent = '';

    li.prepend(span);
  }
});

tree.addEventListener('click', () => {
  const li = event.target.closest('li');

  if (li) {
    const childUl = li.querySelector('ul');

    if (childUl) {
      childUl.hidden = !childUl.hidden;
    }
  }
});
