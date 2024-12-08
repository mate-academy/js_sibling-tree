'use strict';

function wrapHeadlines() {
  const treeItems = document.querySelectorAll('.tree li');

  treeItems.forEach((li) => {
    const textNode = Array.from(li.childNodes).find(
      (node) => node.nodeType === Node.TEXT_NODE,
    );

    if (textNode) {
      const span = document.createElement('span');

      span.textContent = textNode.textContent.trim();
      li.replaceChild(span, textNode);
    }
  });
}

function toggleTree(even) {
  if (even.target.tagName === 'SPAN') {
    const parentLi = even.target.parentElement;

    const childUl = parentLi.querySelector('ul');

    if (childUl) {
      childUl.style.display = childUl.style.display === 'none' ? '' : 'none';
    }
  }
}

wrapHeadlines();

document.querySelector('.tree').addEventListener('click', toggleTree);
