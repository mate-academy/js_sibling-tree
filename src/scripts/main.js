'use strict';

// write code here

const items = document.querySelector('li');
const tree = document.querySelector('.tree');

for (const item of items) {
  const span = document.querySelector('span');

  item.prepend(span);
  span.append(span.nextSibling);

  tree.onclick = (e) => {
    if (e.target.tagName !== 'SPAN') {
      return;
    }

    const childrenContainer = e.target.parentNode.querySelector('ul');

    childrenContainer.hidden = !childrenContainer.hidden;
  };
}
