'use strict';

const tree = document.querySelector('.tree');

function wrapHeadersWithSpan() {
  const listItems = tree.querySelectorAll('li');

  listItems.forEach((li) => {
    if (li.querySelector('ul')) {
      const textNode = li.childNodes[0];

      if (textNode.nodeType === Node.TEXT_NODE) {
        const span = document.createElement('span');

        span.textContent = textNode.textContent.trim();
        li.insertBefore(span, textNode);
        li.removeChild(textNode);
      }
    }
  });
}

function toggleNestedList(ev) {
  if (ev.target.tagName === 'SPAN') {
    const nestedList = ev.target.nextElementSibling;

    if (nestedList && nestedList.tagName === 'UL') {
      nestedList.classList.toggle('hidden');
    }
  }
}

const style = document.createElement('style');

style.textContent = `.hidden { display: none; }`;
document.head.appendChild(style);

wrapHeadersWithSpan();
tree.addEventListener('click', toggleNestedList);
