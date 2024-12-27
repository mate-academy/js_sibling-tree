'use strict';

const liElements = document.querySelectorAll('li');

liElements.forEach((item) => {
  if (item.childNodes.length > 0) {
    const textNode = item.childNodes[0];
    const textContent = textNode.textContent;

    textNode.textContent = '';

    const span = document.createElement('span');

    span.textContent = textContent;

    item.insertAdjacentElement('afterbegin', span);

    span.addEventListener('click', (e) => {
      e.stopPropagation();

      const childrenContainer = item.querySelector('ul');

      if (childrenContainer) {
        childrenContainer.hidden = !childrenContainer.hidden;
      }
    });
  }
});
