'use strict';

document.querySelectorAll('.tree > li').forEach((node) => {
  wrapTextInSpan(node);
});

function wrapTextInSpan(node) {
  const span = document.createElement('span');

  span.textContent = node.childNodes[0].textContent.trim();
  node.childNodes[0].replaceWith(span);

  span.addEventListener('click', () => {
    toggleSubtree(node);
  });
}

function toggleSubtree(node) {
  const subtree = node.querySelector('ul');

  if (subtree) {
    subtree.hidden = !subtree.hidden;
  }
}
