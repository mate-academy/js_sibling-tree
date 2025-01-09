'use strict';

const listElement = document.querySelectorAll('li');

listElement.forEach((el) => {
  const textNode = Array.from(el.childNodes).find(
    (node) => node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() !== '',
  );

  if (textNode) {
    const span = document.createElement('span');

    span.textContent = textNode.nodeValue.trim();
    el.replaceChild(span, textNode);
  }
});

const listHeaders = document.querySelectorAll('li > span');

listHeaders.forEach((listHeader) => {
  listHeader.addEventListener('click', (e) => {
    e.stopPropagation();

    const parentLi = listHeader.parentElement;
    const childGroup = parentLi.querySelector(':scope > ul');

    if (childGroup) {
      childGroup.style.display =
        childGroup.style.display === 'none' ? 'block' : 'none';
    }
  });
});
