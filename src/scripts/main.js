'use strict';

const table = document.querySelector('.tree');

table.onclick = function (e) {
  const target = e.target;

  if (target.tagName !== 'SPAN') {
    return;
  }

  if (target.nextElementSibling.style.display === 'none') {
    target.nextElementSibling.style.display = 'block';

    return;
  }

  target.nextElementSibling.style.display = 'none';
};
