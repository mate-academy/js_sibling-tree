'use strict';

const deepListElem = [...document.querySelectorAll('li > ul')];

deepListElem.forEach((el) => {
  const textNode = el.parentElement.firstChild;
  const spanEl = document.createElement('span');

  spanEl.textContent = textNode.textContent;
  textNode.replaceWith(spanEl);
});

document.addEventListener('click', (e) => {
  if (e.target.closest('span')) {
    e.target.nextElementSibling.hidden = !e.target.nextElementSibling.hidden;
  }
});
