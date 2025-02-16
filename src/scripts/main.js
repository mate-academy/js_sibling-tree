'use strict';

const tree = document.querySelector('.tree');

tree.addEventListener('click', (e) => {
  const span = e.target.closest('span');

  if (!span) {
    return;
  }

  const ul = span.nextElementSibling;

  if (ul.style.display !== 'none') {
    ul.style.display = 'none';

    return;
  }

  ul.style.display = 'block';
});
