'use strict';

const listItems = document.querySelectorAll('li');

for (const item of listItems) {
  const textContent = item.childNodes[0];

  if (textContent.nodeType === Node.TEXT_NODE) {
    const span = document.createElement('span');

    span.textContent = textContent.textContent.trim();
    item.replaceChild(span, textContent);
  }
}

document.querySelectorAll('span').forEach((span) => {
  span.addEventListener('click', () => {
    const parentLi = span.parentElement;
    const nestedUl = parentLi.querySelector('ul');

    if (nestedUl) {
      if (nestedUl.style.display === 'none') {
        nestedUl.style.display = 'block';
      } else {
        nestedUl.style.display = 'none';
      }
    }
  });
});
