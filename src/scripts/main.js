'use strict';

// write code here
document.addEventListener('click', (e) => {
  const clickedElement = e.target;
  const list = clickedElement.querySelector('ul');

  if (list.style.display !== 'none') {
    list.style.display = 'none';
  } else {
    list.style.display = 'block';
  }
});
