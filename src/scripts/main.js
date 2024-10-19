'use strict';

const tree = document.querySelector('.tree');
const liArray = [...document.querySelectorAll('li')];
const liEl = liArray.filter((li) => li.querySelector('ul'));

liEl.forEach((li) => {
  const span = document.createElement('span');

  span.textContent = li.firstChild.textContent;
  li.firstChild.remove();
  li.prepend(span);
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const parentLi = e.target.parentElement;
    const subList = parentLi.querySelector('ul');

    if (subList) {
      subList.style.display =
        subList.style.display === 'none' ? 'block' : 'none';
    }
  }
});
