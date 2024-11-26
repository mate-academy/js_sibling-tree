'use strict';

const liItems = document.querySelectorAll('.tree li');

liItems.forEach((item) => {
  const textNode = Array.from(item.childNodes).find(
    (node) => node.nodeType === Node.TEXT_NODE,
  );

  const spanElement = document.createElement('span');

  spanElement.textContent = textNode.textContent.trim();

  textNode.replaceWith(spanElement);

  const span = item.querySelector('span');

  span.addEventListener('click', (e) => {
    e.stopPropagation();

    const childUl = item.querySelector('ul');

    if (childUl) {
      childUl.style.display =
        childUl.style.display === 'none' ? 'block' : 'none';
    }
  });
});
