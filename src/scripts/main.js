'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const tree = document.querySelector('.tree');

  tree.querySelectorAll('li').forEach((li) => {
    const headerText = li.firstChild;

    if (headerText.nodeType === Node.TEXT_NODE) {
      const span = document.createElement('span');

      span.textContent = headerText.textContent.trim();
      li.replaceChild(span, headerText);
    }

    const childrenUl = li.querySelector('ul');

    if (childrenUl) {
      childrenUl.style.display = 'block';
    }
  });

  tree.addEventListener('click', (e) => {
    if (e.target.tagName === 'SPAN') {
      const parentLi = e.target.parentElement;
      const childrenUl = parentLi.querySelector('ul');

      if (childrenUl) {
        const isVisible = childrenUl.style.display === 'block';

        childrenUl.style.display = isVisible ? 'none' : 'block';
      }
    }
  });
});
