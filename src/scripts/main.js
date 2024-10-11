'use strict';

// write code here
document.addEventListener('DOMContentLoaded', function () {
  const listItems = document.querySelectorAll('.tree li');

  listItems.forEach((item) => {
    const child = item.querySelector('ul');

    if (!child) {
      return;
    }

    const span = document.createElement('span');

    span.textContent = item.firstChild.textContent.trim();
    item.firstChild.replaceWith(span);

    child.style.display = 'block';

    span.addEventListener('click', function (e) {
      e.stopPropagation();

      if (child.style.display === 'none') {
        child.style.display = 'block';
      } else {
        child.style.display = 'none';
      }
    });
  });
});
