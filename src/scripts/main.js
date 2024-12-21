'use strict';

const li = document.querySelectorAll('.tree li');

li.forEach((item) => {
  if (item.firstChild && item.firstChild.nodeType === Node.TEXT_NODE) {
    const span = document.createElement('span');

    span.textContent = item.firstChild.textContent.trim();
    item.firstChild.textContent = '';
    item.prepend(span);

    span.addEventListener('click', () => {
      const childUl = item.querySelector('ul');

      if (childUl) {
        const displayValue = window.getComputedStyle(childUl).display;

        childUl.style.display = displayValue === 'none' ? '' : 'none';
      }
    });
  }
});
