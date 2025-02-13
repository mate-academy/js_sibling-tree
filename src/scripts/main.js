'use strict';

const tree = document.querySelector('.tree');

const list = tree.querySelectorAll('li');

for (const li of list) {
  if (li.querySelector('ul')) {
    const span = document.createElement('span');

    span.textContent = li.firstChild.textContent.trim();
    li.firstChild.replaceWith(span);
  }
}

const spanList = document.querySelectorAll('span');

for (const span of spanList) {
  span.onclick = function () {
    const subList = span.nextElementSibling;

    subList.style.display = subList.style.display === 'none' ? 'block' : 'none';
  };
}
