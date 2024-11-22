'use strict';

const tree = document.querySelector('.tree');
const ul = [...tree.querySelectorAll('ul')];

ul.forEach((elem) => {
  const header = elem.parentNode.firstChild;
  const span = document.createElement('span');

  span.textContent = header.textContent;
  header.remove();
  elem.parentNode.insertBefore(span, elem);
});

// eslint-disable-next-line no-shadow
tree.addEventListener('click', (event) => {
  const span = event.target.closest('span');

  if (span) {
    const list = span.nextElementSibling;
    const isOpen = list.classList.toggle('open');

    if (isOpen) {
      list.style.display = 'none';
    } else {
      list.style.display = 'block';
    }
  }
});
