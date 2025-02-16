'use strict';

const tree = document.querySelector('.tree');

tree.addEventListener('click', (e) => {
  const span = e.target.closest('span');

  if (!span) {
    return;
  }

  const ul = span.nextElementSibling;

  if (!ul || ul.tagName !== 'UL') {
    return;
  }

  ul.style.display = ul.style.display === 'none' ? 'block' : 'none';
});
