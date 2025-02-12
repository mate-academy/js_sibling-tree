'use strict';

document.querySelectorAll('.tree li').forEach((li) => {
  const span = document.createElement('span');

  span.textContent = li.childNodes[0].nodeValue.trim();
  li.childNodes[0].replaceWith(span);

  span.addEventListener('click', () => {
    const childUl = li.querySelector('ul');

    if (childUl) {
      if (childUl.style.display === 'none') {
        childUl.style.display = 'block';
      } else {
        childUl.style.display = 'none';
      }
    }
  });
});
