'use strict';

// write code here
const treeItems = document.querySelectorAll('.tree li');

treeItems.forEach((item) => {
  const subList = item.querySelector('ul');

  if (subList) {
    subList.style.display = 'block';

    const header = document.createElement('span');

    header.textContent = subList.parentElement.firstChild.textContent.trim();
    header.style.cursor = 'pointer';
    subList.parentElement.firstChild.replaceWith(header);

    header.addEventListener('click', (e) => {
      e.stopPropagation();

      subList.style.display =
        subList.style.display === 'block' ? 'none' : 'block';
    });
  }
});
