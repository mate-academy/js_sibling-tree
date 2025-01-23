'use strict';

const ul = document.querySelector('.tree');

// eslint-disable-next-line no-shadow
ul.addEventListener('click', function (event) {
  const li = event.target.closest('li');

  if (li) {
    const inerUL = li.querySelector('ul');

    if (li.style.fontWeight) {
      li.style.fontWeight = null;
    } else {
      li.style.fontWeight = 'bold';
    }

    if (inerUL) {
      if (inerUL.style.display === 'none') {
        inerUL.style.display = 'block';
      } else {
        inerUL.style.display = 'none';
      }
    }
  }
});
