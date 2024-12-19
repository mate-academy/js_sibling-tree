'use strict';

const li = document.querySelectorAll('li');

const liArray = Array.from(li);
const names = [];

for (const nam of liArray) {
  const textNode = nam.firstChild;

  const span = document.createElement('span');

  span.textContent = textNode.textContent;

  nam.replaceChild(span, textNode);

  names.push(span);
}

names.forEach((n) => {
  n.addEventListener('click', (e) => {
    if (n.parentNode.querySelector('ul')) {
      const ul = n.parentNode.querySelector('ul');

      if (ul.style.display !== 'none') {
        ul.style.display = 'none';
      } else {
        ul.style.display = 'block';
      }
    }
  });
});
