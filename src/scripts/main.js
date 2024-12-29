'use strict';

const treeItems = document.querySelectorAll('.tree li');

treeItems.forEach((item) => {
  const ul = item.querySelector('ul');

  if (!ul) {
    return;
  }

  const header = document.createElement('span');

  header.textContent = item.firstChild.textContent.trim();
  item.firstChild.replaceWith(header);

  header.addEventListener('click', (e) => {
    ul.style.display = ul.style.display === '' ? 'none' : '';
  });
});
