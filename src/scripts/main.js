'use strict';

const tree = document.querySelector('.tree');

for (const li of tree.querySelectorAll('li')) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', function (e) {
  if (e.target.tagName === 'SPAN') {
    const ul = e.target.parentNode.querySelector('ul');

    ul.hidden = !ul.hidden;
  }
});

// write code here
