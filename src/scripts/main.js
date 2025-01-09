'use strict';

const treeItems = document.querySelectorAll('.tree li');

treeItems.forEach((item) => {
  const firstTextNode = Array.from(item.childNodes).find(
    (node) => node.nodeType === Node.TEXT_NODE,
  );

  if (firstTextNode) {
    const spanTag = document.createElement('span');

    spanTag.textContent = firstTextNode.textContent.trim();
    item.replaceChild(spanTag, firstTextNode);
  }

  const span = item.querySelector('span');

  if (span) {
    span.addEventListener('click', () => {
      const nestedList = item.querySelector('ul');

      if (nestedList) {
        if (nestedList.style.display === 'none') {
          nestedList.style.display = 'block';
        } else {
          nestedList.style.display = 'none';
        }
      }
    });
  }
});
