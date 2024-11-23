'use strict';

const tree = document.querySelector('.tree');

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const subTree = e.target.nextElementSibling;

  if (subTree && subTree.tagName === 'UL') {
    subTree.hidden = !subTree.hidden;
  }
});

const addSpansToHeaders = (p) => {
  for (const li of p.querySelectorAll('li')) {
    const headerText = li.firstChild;

    if (headerText.nodeType === Node.TEXT_NODE) {
      const span = document.createElement('span');

      span.textContent = headerText.textContent.trim();
      li.replaceChild(span, headerText);
    }

    const childUl = li.querySelector('ul');

    if (childUl) {
      addSpansToHeaders(childUl);
    }
  }
};

addSpansToHeaders(tree);
