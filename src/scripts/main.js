'use strict';

const treeItems = document.querySelectorAll('.tree li');

treeItems.forEach((li) => {
  const nestedUl = li.querySelector('ul');

  if (nestedUl) {
    nestedUl.style.display = 'none';

    const span = document.createElement('span');

    span.textContent = li.firstChild.textContent.trim();
    li.firstChild.textContent = '';
    li.prepend(span);

    span.addEventListener('click', (e) => {
      e.stopPropagation();

      nestedUl.style.display = nestedUl.style.display === 'none' ? '' : 'none';
    });
  }
});
