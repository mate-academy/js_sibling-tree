'use strict';

const ulElement = document.querySelector('.tree');

ulElement.addEventListener('click', (e) => {
  const sublingItem = e.target.nextElementSibling;

  if (!sublingItem) {
    return;
  }

  sublingItem.style.display =
    sublingItem.style.display === 'none' ? 'block' : 'none';
});
