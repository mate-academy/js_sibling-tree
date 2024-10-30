'use strict';

const allLists = document.querySelectorAll('li');

allLists.forEach((item) => {
  const nestedList = item.querySelector('ul');

  if (nestedList) {
    const span = document.createElement('span');

    const text = item.firstChild.textContent.trim();

    span.textContent = text;

    item.firstChild.replaceWith(span);

    span.addEventListener('click', () => {
      if (nestedList.style.display === 'none') {
        nestedList.style.display = 'block';
      } else {
        nestedList.style.display = 'none';
      }
    });
  }
});
