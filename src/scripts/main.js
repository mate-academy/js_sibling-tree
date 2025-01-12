'use strict';

const style = document.createElement('style');

style.textContent = `
  .hidden {
    display: none;
  }
`;
document.head.appendChild(style);

document.querySelectorAll('.tree li').forEach((header) => {
  const span = document.createElement('span');
  const textNode = header.firstChild;

  span.textContent = textNode.textContent.trim();
  textNode.replaceWith(span);

  const nestedList = header.querySelector('ul');

  if (nestedList) {
    nestedList.classList.add('hidden');

    span.addEventListener('click', (e) => {
      e.stopPropagation();
      nestedList.classList.toggle('hidden');
    });
  }
});
