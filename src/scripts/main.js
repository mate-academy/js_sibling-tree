'use strict';

// write code here

const list = document.querySelector('.tree');

function wrapHeaders(subList) {
  if (!subList) {
    return;
  }

  [...subList.children].forEach((item) => {
    const innerList = item.querySelector('ul');

    if (
      innerList &&
      item.firstChild &&
      item.firstChild.nodeType === Node.TEXT_NODE
    ) {
      const span = document.createElement('span');

      span.textContent = item.firstChild.textContent;

      item.replaceChild(span, item.firstChild);
    }

    if (innerList) {
      wrapHeaders(innerList);
    }
  });
}

wrapHeaders(list);

list.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const nestedList = e.target.nextElementSibling;

    if (nestedList && nestedList.tagName === 'UL') {
      nestedList.style.display =
        nestedList.style.display === 'none' ? 'block' : 'none';
    }
  }
});
