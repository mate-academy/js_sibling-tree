'use strict';

const list = document.querySelector('.tree');

function getSlidingTree(tree) {
  const listItems = tree.children;

  [...listItems].forEach((item) => {
    const nestedList = item.children[0];

    if (nestedList) {
      const headlineWrapper = document.createElement('span');

      headlineWrapper.className = 'headline';

      headlineWrapper.append(item.childNodes[0]);

      headlineWrapper.addEventListener('click', () => {
        if (nestedList.style.display === 'none') {
          nestedList.style.display = 'block';
        } else {
          nestedList.style.display = 'none';
        }
      });

      item.prepend(headlineWrapper);

      getSlidingTree(nestedList);
    }
  });
}

getSlidingTree(list);
