'use strict';

const tree = document.querySelector('.tree');
const LiElement = tree.querySelectorAll('li');

LiElement.forEach((listItem) => {
  const ulElement = listItem.querySelector('ul');

  if (ulElement) {
    const span = document.createElement('span');
    const text = listItem.firstChild;

    span.textContent = text.textContent;
    listItem.insertBefore(span, text);
    text.remove();
  }
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const nextSibling = e.target.nextSibling;

    if (nextSibling && nextSibling.tagName === 'UL') {
      nextSibling.hidden = !nextSibling.hidden;
    }
  }
});
