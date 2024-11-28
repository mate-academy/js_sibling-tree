'use strict';

const tree = document.querySelector('.tree');
const listItems = document.querySelectorAll('li');

listItems.forEach((item) => {
  const span = document.createElement('span');

  span.appendChild(item.firstChild);
  item.prepend(span);
});

tree.addEventListener('click', (e) => {
  const target = e.target;

  if (target.tagName !== 'SPAN') {
    return;
  }

  const nextSibling = target.nextSibling;

  nextSibling.hidden = !nextSibling.hidden;
});
