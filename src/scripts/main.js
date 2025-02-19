'use strict';

const ulElement = document.querySelector('.tree');

ulElement.addEventListener('click', (e) => {
  const siblingItem = e.target.nextElementSibling;

  if (!siblingItem) {
    return;
  }

  siblingItem.style.display =
    siblingItem.style.display === 'none' ? 'block' : 'none';
});
