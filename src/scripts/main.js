'use strict';

const tree = document.querySelectorAll('.tree li');

function wrapper(item) {
  const textNode = item.firstChild.textContent.trim();

  if (textNode) {
    const span = document.createElement('span');

    span.textContent = textNode;

    item.firstChild.replaceWith(span);

    span.addEventListener('click', (e) => {
      e.stopPropagation();
      hideItems(span);
    });
  }
}

tree.forEach((item) => {
  const hasChildren = item.querySelector('ul');

  if (hasChildren) {
    wrapper(item);
  }
});

function hideItems(item) {
  const nextItem = item.nextElementSibling;

  nextItem.style.display = nextItem.style.display === 'none' ? '' : 'none';
}
