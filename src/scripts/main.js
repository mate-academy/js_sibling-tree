'use strict';

const li = document.querySelectorAll('li');

li.forEach((elem) => {
  const span = document.createElement('span');

  span.textContent = elem.firstChild.textContent.trim();
  elem.firstChild.replaceWith(span);

  const ul = span.nextElementSibling;

  if (ul) {
    span.addEventListener(
      'click',
      () => (ul.style.display = ul.style.display === 'none' ? 'block' : 'none'),
    );
  }
});
