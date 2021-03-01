'use strict';

const list = document.querySelector('.tree');
const items = document.querySelectorAll('li');

items.forEach(item => {
  const span = document.createElement('span');

  if (item.children.length) {
    span.innerText = item.childNodes[0].data.trim();
    item.childNodes[0].data = '';
    item.insertAdjacentElement('afterbegin', span);
  }
});

function hideHandler(e) {
  const toggler = e.target.closest('li').querySelector('ul');

  toggler.hidden = !toggler.hidden;
};

list.addEventListener('click', hideHandler);
