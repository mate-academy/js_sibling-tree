'use strict';

function createSlidingTree(tree) {
  [...tree.children].forEach((branch) => {
    const innerTree = branch.querySelector('ul');

    if (innerTree !== null) {
      createSlidingTree(innerTree);

      const title = document.createElement('span');

      title.textContent = branch.firstChild.textContent;
      branch.firstChild.replaceWith(title);

      title.addEventListener('click', () => {
        innerTree.style.display =
          innerTree.style.display === 'none' ? '' : 'none';
      });
    }
  });
}

createSlidingTree(document.querySelector('.tree'));
