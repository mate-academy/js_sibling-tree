'use strict';

const li = Array.from(document.querySelectorAll('li'));

li.forEach((el) => {
  const span = document.createElement('span');
  const textSpan = el.firstChild;

  span.textContent = textSpan.textContent;
  el.firstChild.replaceWith(span);
});

document.addEventListener('click', function (e) {
  const target = e.target.closest('li');

  if (!target) {
    return undefined;
  }

  const childUl = target.querySelector('ul');

  if (!childUl) {
    return undefined;
  }

  childUl.style.display = childUl.style.display === 'none' ? 'block' : 'none';
});
