'use strict';

const list = document.querySelector('ul');

list.querySelectorAll('li').forEach((el) => {
  const span = document.createElement('span');

  span.textContent = el.firstChild.textContent.trim();
  el.firstChild.replaceWith(span);
});

list.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const listItem = e.target.closest('li');
    const subList = listItem.querySelector('ul');

    if (subList) {
      subList.style.display = subList.style.display === 'none' ? '' : 'none';
    }
  }
});
