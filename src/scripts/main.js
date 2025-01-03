'use strict';

const tree = document.querySelector('.tree');

tree.querySelectorAll('li').forEach((elem) => {
  const span = document.createElement('span');

  elem.prepend(span);
  span.append(span.nextSibling);
});

tree.addEventListener('click', (e) => {
  const ul = e.target.parentNode.querySelector('ul');

  if (e.target.closest('span')) {
    ul.hidden = !ul.hidden;
  }
});
