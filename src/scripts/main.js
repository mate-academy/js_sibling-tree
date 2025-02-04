'use strict';

const tree = document.querySelector('.tree');

tree.querySelectorAll('li').forEach((li) => {
  const text = li.firstChild.textContent.trim();

  if (!text) {
    return;
  }

  const span = document.createElement('span');

  span.textContent = text;
  li.firstChild.replaceWith(span);
});

tree.addEventListener('click', (e) => {
  const title = e.target.closest('span');

  if (!title) {
    return;
  }

  const parentLi = title.parentElement;
  const sublist = parentLi.querySelector('ul');

  if (sublist) {
    sublist.hidden = !sublist.hidden;
  }
});
