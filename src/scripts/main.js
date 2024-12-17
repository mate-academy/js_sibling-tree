'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const treeItems = document.querySelectorAll('.tree li');

  treeItems.forEach((li) => {
    const childUl = li.querySelector('ul');

    if (childUl) {
      const span = document.createElement('span');

      span.textContent = li.firstChild.textContent.trim();
      li.firstChild.textContent = '';
      li.insertBefore(span, childUl);

      childUl.style.display = 'none';

      span.style.cursor = 'pointer';

      span.addEventListener('click', () => {
        if (childUl.style.display === 'none') {
          childUl.style.display = 'block';
        } else {
          childUl.style.display = 'none';
        }
      });
    }
  });
});
