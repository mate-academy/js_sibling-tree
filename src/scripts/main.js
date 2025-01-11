'use strict';

const tree = document.querySelector('.tree');
const treeItems = tree.querySelectorAll('li');

treeItems.forEach((item) => {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);
});

tree.addEventListener('click', (e) => {
  const ul = e.target.parentNode.querySelector('ul');

  if (e.target.closest('span')) {
    ul.hidden = !ul.hidden;
  }
});
