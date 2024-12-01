'use strict';

const tree = document.querySelector('.tree');

if (!tree) {
  throw new Error('List not defined');
}

for (const li of tree.querySelectorAll('li')) {
  const span = document.createElement('span');
  const textNode = li.firstChild;

  span.append(textNode);
  li.prepend(span);
}

tree.onclick = (e) => {
  if (e.target.tagName !== 'SPAN') {
    return false;
  }
  e.stopPropagation();

  const childrenContainer = e.target.parentNode.querySelector('ul');

  if (!childrenContainer) {
    return false;
  }

  childrenContainer.hidden = !childrenContainer.hidden;
};
