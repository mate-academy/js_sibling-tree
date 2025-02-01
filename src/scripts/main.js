'use strict';

const tree = document.querySelector('.tree');

const listOfHeaders = tree.querySelectorAll('li li:has(ul)');

listOfHeaders.forEach((el) => {
  const newSpan = document.createElement('span');

  newSpan.append(el.firstChild);

  el.prepend(newSpan);
});

tree.addEventListener('click', (e) => {
  const clickElement = e.target.closest('span');

  if (clickElement.nextElementSibling.style.display === 'none') {
    clickElement.nextElementSibling.style.display = 'block';
  } else {
    clickElement.nextElementSibling.style.display = 'none';
  }
});
