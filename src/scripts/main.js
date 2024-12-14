'use strict';

const tree = document.querySelector('.tree');

function expandTree(treeIn) {
  for (const item of treeIn.querySelectorAll('li')) {
    if (item.querySelector('ul')) {
      expandTree(item.querySelector('ul'));

      const newSpan = document.createElement('span');

      newSpan.textContent = item.firstChild.textContent.trim();

      item.firstChild.remove();
      item.insertBefore(newSpan, item.querySelector('ul'));
    }
  }
}

expandTree(tree);

document.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const childList = e.target.nextElementSibling;

    if (childList && childList.tagName === 'UL') {
      if (
        childList.style.display === '' ||
        childList.style.display === 'block'
      ) {
        childList.style.display = 'none';
      } else {
        childList.style.display = 'block';
      }
    }
  }
});
