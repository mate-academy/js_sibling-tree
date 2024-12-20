'use strict';

// write code here
const li = document.querySelectorAll('li');

li.forEach((item) => {
  const span = document.createElement('span');

  span.textContent = item.firstChild.textContent.trim();
  item.firstChild.textContent = '';
  item.prepend(span);

  span.addEventListener('click', () => {
    const childUl = item.querySelector('ul');

    if (childUl) {
      if (childUl.style.display === 'none') {
        childUl.style.display = '';
      } else {
        childUl.style.display = 'none';
      }
    }
  });
});
