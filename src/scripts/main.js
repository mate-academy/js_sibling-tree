'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.tree li');

  items.forEach((item) => {
    const childUl = item.querySelector('ul');

    if (childUl) {
      const text = item.firstChild.textContent.trim();
      const span = document.createElement('span');

      span.textContent = text;
      span.style.cursor = 'pointer';
      item.firstChild.textContent = '';

      item.insertBefore(span, childUl);

      childUl.style.display = 'none';

      span.addEventListener('click', () => {
        childUl.style.display =
          childUl.style.display === 'none' ? 'block' : 'none';
      });
    }
  });
});
