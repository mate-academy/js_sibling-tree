'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const tree = document.querySelector('.tree');

  if (!tree) {
    return;
  }

  // eslint-disable-next-line no-shadow
  tree.addEventListener('click', (event) => {
    // Перевіряємо, чи клік був по <span>
    if (event.target.tagName === 'SPAN') {
      const listItem = event.target.closest('li');

      if (listItem) {
        const childUl = listItem.querySelector('ul');

        if (childUl) {
          childUl.hidden = !childUl.hidden;
        }
      }
    }
  });

  const headers = tree.querySelectorAll('li > span');

  headers.forEach((header) => {
    // eslint-disable-next-line no-shadow
    const parent = header.parentElement;
    const textNode = document.createTextNode(header.textContent);
    const span = document.createElement('span');

    span.appendChild(textNode);
    parent.replaceChild(span, header);
  });
});
