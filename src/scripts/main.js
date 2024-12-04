'use strict';

const tree = document.querySelector('.tree');
const lis = tree.querySelectorAll('li');

lis.forEach((el) => {
  const text = el.childNodes[0].nodeValue.trim();
  const span = document.createElement('span');

  span.textContent = text;
  el.childNodes[0].replaceWith(span);
});

tree.addEventListener('click', (ev) => {
  ev.stopPropagation();

  const span = ev.target.closest('span');

  if (!span) {
    return;
  }

  const ul = span.nextElementSibling;

  if (ul) {
    if (ul.style.display === 'block' || ul.style.display === '') {
      ul.style.display = 'none';
    } else {
      ul.style.display = 'block';
    }
  }
});
