'use strict';

document.querySelectorAll('.tree li').forEach((li) => {
  const childNodes = Array.from(li.childNodes);

  childNodes.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '') {
      const span = document.createElement('span');

      span.textContent = node.textContent.trim();
      node.replaceWith(span);
    }
  });
});

document.querySelectorAll('.tree span').forEach((span) => {
  span.addEventListener('click', (e) => {
    const parentLi = span.parentElement;
    const childUl = parentLi.querySelector('ul');

    if (childUl) {
      childUl.hidden = !childUl.hidden;
    }

    e.stopPropagation();
  });
});
