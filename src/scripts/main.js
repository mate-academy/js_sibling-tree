'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const tree = document.querySelectorAll('.tree li');

  tree.forEach((item) => {
    const span = document.createElement('span');

    span.textContent = item.childNodes[0].nodeValue.trim();

    item.insertBefore(span, item.childNodes[0]);
    item.childNodes[1].nodeValue = '';

    const childUl = item.querySelector('ul');

    span.addEventListener('click', (e) => {
      e.stopPropagation();

      if (childUl) {
        childUl.style.display =
          childUl.style.display === 'none' ? 'block' : 'none';
      }
    });
  });
});
