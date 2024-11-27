'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const tree = document.querySelector('.tree');

  tree.querySelectorAll('li').forEach((li) => {
    const textNode = li.childNodes[0];

    if (textNode.nodeType === Node.TEXT_NODE) {
      const span = document.createElement('span');

      span.textContent = textNode.textContent.trim();
      li.insertBefore(span, textNode);
      li.removeChild(textNode);
    }
  });

  tree.addEventListener('click', (e) => {
    if (e.target.tagName === 'SPAN') {
      const parentLi = e.target.parentElement;
      const subTree = parentLi.querySelector('ul');

      if (subTree) {
        subTree.hidden = !subTree.hidden;
      }
    }
  });
});
