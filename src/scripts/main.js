'use strict';

const treeItems = document.querySelectorAll('.tree li');

treeItems.forEach((item) => {
  const childUl = item.querySelector('ul');

  if (childUl) {
    const span = document.createElement('span');

    span.textContent = item.firstChild.textContent;
    item.firstChild.replaceWith(span);

    // childUl.style.display = 'none';

    span.addEventListener('click', () => {
      if (childUl.style.display === 'none') {
        childUl.style.display = 'block';
      } else {
        childUl.style.display = 'none';
      }
    });
  }
});
