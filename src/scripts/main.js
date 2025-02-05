'use strict';

const tree = document.querySelector('.tree');

createSpanForHeaders(tree);

function createSpanForHeaders(list) {
  const listsInTree = list.querySelectorAll('ul');

  for (const ul of listsInTree) {
    const replacedElement = ul.parentNode.firstChild;
    const headerText = replacedElement.textContent;

    const span = document.createElement('span');
    span.innerText = headerText;

    replacedElement.replaceWith(span);
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

