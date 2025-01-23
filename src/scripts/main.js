'use strict';

const tree = document.querySelector('.tree');
const parentItems = tree.querySelectorAll('li:has(> ul)');

parentItems.forEach((li) => {
  const text = li.firstChild.textContent.trim();
  const span = document.createElement('span');

  span.textContent = text;
  span.classList.add('list-title');
  span.style.display = 'block';

  li.replaceChild(span, li.firstChild);
});

const titleList = document.querySelectorAll('.list-title');

titleList.forEach((item) => {
  item.addEventListener('click', () => {
    const ul = item.nextElementSibling;

    if (ul.style.display === 'none') {
      ul.style.display = 'block';
    } else {
      ul.style.display = 'none';
    }
  });
});
