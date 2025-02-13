'use strict';

const headers = document.querySelectorAll('li:has(ul)');

headers.forEach((header) => {
  const span = document.createElement('span');

  span.textContent = header.firstChild.textContent;
  header.firstChild.textContent = '';
  header.prepend(span);

  const ul = header.querySelector('ul');

  span.addEventListener('click', (e) => {
    if (ul) {
      ul.style.display = ul.style.display === 'none' ? 'block' : 'none';
    }
  });
});
