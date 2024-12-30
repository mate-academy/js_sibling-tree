'use strict';

// отримуємо коллекцію усіх елементів списку
const headline = document.querySelectorAll('li');

function createSpan(el) {
  const spanEl = document.createElement('span');
  const textNode = el.firstChild;

  el.firstChild.parentNode.insertBefore(spanEl, textNode);
  spanEl.appendChild(textNode);
}

for (const el of headline) {
  if (el.children.length > 0) {
    createSpan(el);
  }
}

const spanArray = [...document.querySelectorAll('span')];

for (const li of spanArray) {
  li.addEventListener('click', (e) => {
    const children = li.nextElementSibling;

    if (children.style.display === '') {
      children.style.display = 'none';
    } else {
      children.style.display = '';
    }
  });
}
