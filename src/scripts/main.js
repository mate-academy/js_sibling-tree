'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const treeItems = document.querySelectorAll('li');

  treeItems.forEach((item) => {
    const nestedList = item.querySelector('ul');

    if (nestedList) {
      nestedList.style.display = 'none';

      item.addEventListener('click', (e) => {
        e.stopPropagation();

        const currentNestedList = item.querySelector('ul');

        if (currentNestedList) {
          currentNestedList.style.display =
            currentNestedList.style.display === 'none' ? 'block' : 'none';
        }
      });
    }
  });
});
