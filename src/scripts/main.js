'use strict';

const AllLi = document.querySelectorAll('li');

AllLi.forEach((li) => {
  const span = document.createElement('span');

  span.textContent = li.firstChild.textContent.trim();
  li.firstChild.replaceWith(span);

  span.addEventListener('click', (e) => {
    const ul = li.querySelector('ul');

    if (ul) {
      ul.style.display = ul.style.display === 'none' ? 'block' : 'none';
    }
  });
});
