'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const tree = document.querySelector('.tree');

  // eslint-disable-next-line no-shadow
  tree.addEventListener('click', (event) => {
    if (event.target.tagName === 'SPAN') {
      const parentLi = event.target.parentElement;
      const childrenContainer = parentLi.querySelector('ul');

      if (childrenContainer) {
        childrenContainer.classList.toggle('hidden');
      }
    }
  });

  const headers = tree.querySelectorAll('li > span');

  headers.forEach((header) => {
    const parentLi = header.parentElement;
    const childrenContainer = parentLi.querySelector('ul');

    if (childrenContainer) {
      childrenContainer.classList.add('hidden');
    }
  });
});
