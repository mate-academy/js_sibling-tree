'use strict';

const treeItems = document.querySelectorAll('.tree li');

treeItems.forEach((item) => {
  const nestedList = item.querySelector('ul');

  if (nestedList) {
    const span = document.createElement('span');

    span.textContent = item.childNodes[0].nodeValue.trim();
    item.childNodes[0].replaceWith(span);

    span.addEventListener('click', () => {
      if (nestedList.style.display === 'none') {
        nestedList.style.display = 'block';
      } else {
        nestedList.style.display = 'none';
      }
    });
    nestedList.style.display = 'none';
  }
});
