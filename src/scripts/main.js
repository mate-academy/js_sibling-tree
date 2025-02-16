'use strict';

const listOfproducts = document.querySelector('.tree');
const headerLis = document.querySelectorAll('.tree > li > ul').parentElement;

headerLis.forEach((li) => {
  const text = li.firstChild.textContent.trim();
  const span = document.createElement('span');

  span.textContent = text;
  li.firstChild.textContent = ''; // очищаємо текст
  li.insertBefore(span, li.firstChild);
});

listOfproducts.addEventListener('click', (e) => {
  const target = e.target;

  if (target.tagName === 'SPAN') {
    const ul = target.parentElement.nextElementSibling;

    if (ul) {
      ul.style.display = ul.style.display === 'none' ? 'block' : 'none';
    }
  }
});
