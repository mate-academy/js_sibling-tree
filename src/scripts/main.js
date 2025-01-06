'use strict';

// write code here
document.querySelectorAll('.tree > li').forEach((li) => {
  const textNode = li.firstChild;

  if (textNode && textNode.nodeType === 3) {
    const span = document.createElement('span');

    span.textContent = textNode.textContent;
    li.insertBefore(span, textNode);
    li.removeChild(textNode);
  }

  const header = li.querySelector('span');

  header.addEventListener('click', (e) => {
    const nestedList = li.querySelector('ul');

    if (nestedList) {
      nestedList.style.display =
        nestedList.style.display === 'none' ? '' : 'none';
    }

    e.stopPropagation();
  });
});

document.querySelectorAll('.tree > li > ul').forEach((ul) => {
  ul.style.display = 'none';
});
