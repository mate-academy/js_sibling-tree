'use strict';

document.querySelectorAll('.tree li').forEach((li) => {
  if (li.children.length && li.firstChild.nodeType === Node.TEXT_NODE) {
    const span = document.createElement('span');

    span.textContent = li.firstChild.textContent.trim();
    li.firstChild.replaceWith(span);

    span.addEventListener('click', (e) => {
      const ul = e.target.nextElementSibling;

      ul.style.display = ul.style.display === 'none' ? 'block' : 'none';
    });
  }
});
