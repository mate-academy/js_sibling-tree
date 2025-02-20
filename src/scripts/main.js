'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const expandableItems = document.querySelectorAll('.tree li > ul');

  expandableItems.forEach((nestedList) => {
    const parentLi = nestedList.parentNode;

    const textNode = parentLi.childNodes[0];
    const span = document.createElement('span');

    span.textContent = textNode.textContent.trim();
    parentLi.insertBefore(span, textNode);
    parentLi.removeChild(textNode);

    nestedList.style.display = 'none';

    span.addEventListener('click', () => {
      if (nestedList.style.display === 'none') {
        nestedList.style.display = 'block';
      } else {
        nestedList.style.display = 'none';
      }
    });
  });
});
