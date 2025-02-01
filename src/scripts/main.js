'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.tree li').forEach((li) => {
    const span = document.createElement('span');

    span.textContent = li.firstChild.textContent.trim();
    li.firstChild.replaceWith(span); // Замінюємо текстовий вузол на span

    // eslint-disable-next-line no-shadow
    span.addEventListener('click', (event) => {
      const childUl = li.querySelector('ul');

      if (childUl) {
        childUl.style.display =
          childUl.style.display === 'none' ? 'block' : 'none';
      }
    });
  });
});
