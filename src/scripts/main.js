'use strict';

// write code here

document.addEventListener('DOMContentLoaded', () => {
  const tree = document.querySelector('.tree');

  const list = tree.querySelectorAll('li');

  list.forEach((li) => {
    const childNodes = Array.from(li.childNodes);

    childNodes.forEach((node) => {
      if (node.nodeType === 3) {
        const span = document.createElement('span');

        span.textContent = node.textContent;
        node.parentNode.replaceChild(span, node);
      }
    });
  });

  tree.addEventListener('click', (e) => {
    if (e.target.tagName === 'SPAN') {
      const parentLi = e.target.parentElement;
      const sublist = parentLi.querySelector('ul');

      if (sublist) {
        sublist.style.display =
          sublist.style.display === 'none' ? 'block' : 'none';
      }
    }
  });
});
