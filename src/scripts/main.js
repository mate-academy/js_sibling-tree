'use strict';

document.querySelectorAll('li').forEach((li) => {
  if (li.querySelector('ul')) {
    const span = document.createElement('span');

    span.append(li.firstChild);
    li.prepend(span);
  }
});

document.querySelector('.tree').addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const subList = e.target.nextElementSibling;

    if (subList) {
      subList.style.display =
        subList.style.display === 'none' ? 'block' : 'none';
    }
  }
});
