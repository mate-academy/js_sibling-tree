'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const tree = document.querySelector('.tree');

  if (!tree) {
    return;
  }

  tree.querySelectorAll('li').forEach((li) => {
    const firstChild = li.firstChild;

    if (firstChild.nodeType === Node.TEXT_NODE) {
      const span = document.createElement('span');

      span.textContent = firstChild.textContent.trim();
      li.replaceChild(span, firstChild);
    }
  });

  tree.addEventListener('click', (e) => {
    if (e.target.tagName === 'SPAN') {
      const parentLi = e.target.parentElement;

      if (parentLi) {
        const subList = parentLi.querySelector('ul');

        if (subList) {
          subList.hidden = !subList.hidden;
        }
      }
    }
  });
});
