'use strict';

document.querySelectorAll('.tree li').forEach((li) => {
  const span = document.createElement('span');

  span.textContent = li.childNodes[0].nodeValue.trim();
  li.childNodes[0].replaceWith(span);

  span.addEventListener('click', () => {
    const childUl = li.querySelector('ul');

    if (childUl) {
      childUl.style.display =
        childUl.style.display === 'none' ? 'block' : 'none';
    }
  });
});
