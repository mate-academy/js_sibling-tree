'use strict';

const listItems = document.querySelectorAll('li');

listItems.forEach((item) => {
  const textContent = item.firstChild;

  if (textContent.nodeType === Node.TEXT_NODE) {
    const span = document.createElement('span');

    span.textContent = textContent.textContent.trim();
    item.replaceChild(span, textContent);
  }
});

const mainList = document.querySelector('.tree');

mainList.addEventListener('click', (e) => {
  const clickedItem = e.target.closest('span');

  if (!clickedItem) {
    return;
  }

  const parentOfLi = clickedItem.parentElement;
  const nestedUl = parentOfLi.querySelector('ul');

  if (nestedUl) {
    nestedUl.style.display =
      nestedUl.style.display === 'none' ? 'block' : 'none';
  }
});
