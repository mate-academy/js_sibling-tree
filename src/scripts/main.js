'use strict';

const tree = document.querySelector('.tree');
const headers = tree.querySelectorAll('li');

headers.forEach((head) => {
  const check = head.querySelector('ul');

  if (check) {
    const spanElem = document.createElement('span');

    spanElem.textContent = head.firstChild.textContent;
    head.firstChild.replaceWith(spanElem);
  }
});

tree.querySelectorAll('span').forEach((elem) => {
  elem.addEventListener('click', (e) => {
    if (e.currentTarget.nextElementSibling.hidden) {
      e.currentTarget.nextElementSibling.hidden = false;
    } else {
      e.currentTarget.nextElementSibling.hidden = true;
    }

    e.stopPropagation();
  });
});
