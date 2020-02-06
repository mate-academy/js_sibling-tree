'use strict';

const tree = document.querySelector('.tree');
const liList = tree.querySelectorAll('li');

for (const li of liList) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
}

const onClickHandler = function(evt) {
  const { target } = evt;

  const item = target.parentNode.querySelector('ul');

  if (target.tagName !== 'SPAN' || !item) {
    return;
  }

  item.classList.toggle('hidden');
};

tree.addEventListener('click', onClickHandler);
