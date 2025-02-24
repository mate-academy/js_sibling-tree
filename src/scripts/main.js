'use strict';

const tree = document.querySelector('.tree');
const liElements = document.querySelectorAll('li');

liElements.forEach((li) => {
  if (li.querySelector('ul')) {
    const span = document.createElement('span');

    span.append(li.firstChild);
    li.prepend(span);
  }
});

tree.addEventListener('click', (e) => {
  const span = e.target.closest('span');

  if (!span) {
    return;
  }

  const li = span.parentElement;
  const ul = li.querySelector('ul');

  if (ul) {
    ul.style.display = ul.style.display === 'none' ? 'block' : 'none';
  }
});
