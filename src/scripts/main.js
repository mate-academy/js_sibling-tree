'use strict';

const tree = document.querySelector('.tree');
const liItems = tree.querySelectorAll('li:has(> ul)');

liItems.forEach((item) => {
  const span = document.createElement('span');
  const textContent = item.firstChild.textContent.trim();

  span.textContent = textContent;
  span.style.display = 'block';
  span.classList.add('span-class');
  item.replaceChild(span, item.firstChild);
});

const spanItems = document.querySelectorAll('.span-class');

spanItems.forEach((item) => {
  item.addEventListener('click', () => {
    const elem = item.nextElementSibling;

    elem.style.display = elem.style.display === '' ? 'none' : '';
  });
});
