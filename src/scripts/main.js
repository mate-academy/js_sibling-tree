'use strict';

const listElements = document.querySelectorAll('li');

listElements.forEach((element) => {
  const textNode = element.firstChild;

  if (textNode.nodeType === Node.TEXT_NODE) {
    const spanElement = document.createElement('span');

    spanElement.textContent = textNode.textContent.trim();
    element.replaceChild(spanElement, textNode);
  }
});

const treeList = document.querySelector('.tree');

treeList.addEventListener('click', (e) => {
  const clickedSpan = e.target.closest('span');

  if (!clickedSpan) {
    return;
  }

  const parentLi = clickedSpan.parentElement;
  const nestedList = parentLi.querySelector('ul');

  if (nestedList) {
    nestedList.style.display =
      nestedList.style.display === 'none' ? 'block' : 'none';
  }
});
