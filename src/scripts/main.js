'use strict';

const list = Array.from(document.querySelectorAll('li'));

list.forEach((item) => {
  if (item.children.length) {
    const spanHeader = document.createElement('span');

    spanHeader.innerHTML = item.firstChild.textContent.trim();

    item.firstChild.replaceWith(spanHeader);

    spanHeader.addEventListener('click', (e) => {
      const display = getComputedStyle(e.target.nextElementSibling).display;

      e.target.nextElementSibling.style.display =
        display === 'none' ? 'block' : 'none';
    });
  }
});
