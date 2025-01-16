'use strict';

function wrapTextWithSpan(element) {
  for (const child of element.childNodes) {
    if (child.nodeType === Node.TEXT_NODE && child.textContent.trim() !== '') {
      const span = document.createElement('span');

      span.textContent = child.textContent.trim();

      element.replaceChild(span, child);
    } else if (child.nodeType === Node.ELEMENT_NODE) {
      wrapTextWithSpan(child);
    }
  }
}

const tree = document.querySelector('.tree');

wrapTextWithSpan(tree);

document.addEventListener('click', (e) => {
  const hideBlock = e.target.nextSibling;

  if (hideBlock) {
    if (hideBlock.style.display === 'none') {
      hideBlock.style.display = 'block';
    } else {
      hideBlock.style.display = 'none';
    }
  }
});
