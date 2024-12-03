'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const tree = document.querySelector('.tree');

  // Додаємо слухач подій
  tree.addEventListener('click', (e) => {
    const target = e.target;

    if (target.tagName === 'SPAN') {
      const parentLi = target.closest('li');

      if (!parentLi) {
        return;
      }

      const childUl = parentLi.querySelector('ul');

      if (childUl) {
        childUl.hidden = !childUl.hidden;
      }
    }
  });

  const nestedLists = tree.querySelectorAll('ul');

  nestedLists.forEach((ul) => {
    ul.hidden = true;
  });
});
