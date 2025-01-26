'use strict';

const liItems = document.querySelectorAll('li > ul');

liItems.forEach((el) => {
  const parentLi = el.parentElement;

  const text = parentLi.firstChild.textContent.trim();

  const span = document.createElement('span');

  span.textContent = text;

  parentLi.firstChild.replaceWith(span);

  el.style.display = 'block';

  span.addEventListener('click', () => {
    el.style.display = el.style.display === 'block' ? 'none' : 'block';
  });
});
