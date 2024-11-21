'use strict';

const treeItems = document.querySelectorAll('.tree li');

treeItems.forEach((item) => {
  const sublist = item.querySelector('ul');

  if (sublist) {
    const header = document.createElement('span');
    const parentElement = sublist.parentElement;

    header.textContent = parentElement.firstChild.textContent.trim();

    item.firstChild.replaceWith(header);

    header.addEventListener('click', () => {
      const isVisible = sublist.style.display !== 'none';

      sublist.style.display = isVisible ? 'none' : 'block';
    });
  }
});
