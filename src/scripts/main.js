'use strict';

const liElements = document.querySelectorAll('li');

for (const li of liElements) {
  if (li.querySelector('ul')) {
    const textNode = li.childNodes[0];
    const correctText = textNode.textContent.trim();
    const span = document.createElement('SPAN');

    span.textContent = correctText;

    li.replaceChild(span, textNode);
  }
}

const tree = document.querySelector('.tree');

// eslint-disable-next-line no-shadow
tree.addEventListener('click', (event) => {
  if (event.target.tagName === 'SPAN') {
    // eslint-disable-next-line no-unused-expressions
    event.target.nextSibling.style.display === 'none'
      ? (event.target.nextSibling.style.display = 'block')
      : (event.target.nextSibling.style.display = 'none');
  }
});
