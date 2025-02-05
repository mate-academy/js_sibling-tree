'use strict';

const tree = document.querySelector('.tree');

createSpanForHeaders(tree);

function createSpanForHeaders(list) {
  const listsInTree = tree.querySelectorAll('ul');

  for (const ul of listsInTree) {
    const headerNode = ul.parentNode.firstChild;
    const headerText = headerNode.textContent;

    const span = document.createElement('span');
    span.innerText = headerText;

    headerNode.replaceWith(span);
  }
}

tree.addEventListener('click', (event) => {
  const target = event.target;

  if (target.nodeName !== 'SPAN') return;

  const ul = target.nextElementSibling;

  if (ul.style.display === 'none') {
    ul.style.display = 'block';
  } else {
    ul.style.display = 'none';
  }
})

