'use strict';

const tree = document.querySelector('.tree');
const li = document.querySelectorAll('.tree li');

li.forEach((el) => {
  const textNode = [...el.childNodes].find((node) => {
    return node.nodeType === Node.TEXT_NODE && node.textContent.trim();
  });

  if (textNode && el.querySelector('ul')) {
    const spanElement = document.createElement('span');

    spanElement.textContent = textNode.textContent.trim();
    el.replaceChild(spanElement, textNode);
  }
});

tree.addEventListener('click', (e) => {
  const span = e.target.closest('span');
  const elAfterSpan = span.nextSibling;

  elAfterSpan.style.display =
    elAfterSpan.style.display === 'none' ? 'block' : 'none';
});
