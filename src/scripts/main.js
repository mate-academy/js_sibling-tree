'use strict';

const list = document.querySelector('.tree');
const listItem = [...list.querySelectorAll('li')];

for (const item of listItem) {
  if (item.querySelector('ul') !== null) {
    const span = document.createElement('span');

    span.textContent = item.textContent.trim().split(' ')[0];
    item.prepend(span);
    item.childNodes[1].textContent = null;
  }
}

const listSpan = [...list.querySelectorAll('span')];

// console.log(listSpan);

for (const span of listSpan) {
  span.addEventListener('click', (e) => {
    const nextUl = e.currentTarget.nextElementSibling;

    if (
      nextUl.getAttribute('style') === 'display: auto' ||
      nextUl.getAttribute('style') === null
    ) {
      nextUl.setAttribute('style', 'display: none;');
    } else {
      nextUl.setAttribute('style', 'display: auto');
    }
  });
}
