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

tree.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    if (e.target.nextSibling.style.display === 'none') {
      e.target.nextSibling.style.display = 'block';
    } else {
      e.target.nextSibling.style.display = 'none';
    }
  }
});
