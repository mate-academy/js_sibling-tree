'use strict';

const tree = document.querySelector('.tree');

for (const li of tree.querySelectorAll('li')) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const childrenList = e.target.parentNode.querySelector('ul');

  if (!childrenList) {
    return;
  }
  childrenList.hidden = !childrenList.hidden;
});
