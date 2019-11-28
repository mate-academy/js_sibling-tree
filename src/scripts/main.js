'use strict';

const tree = document.getElementsByClassName('tree')[0];
const ul = document.querySelectorAll('ul');

[...ul].forEach(item => {
  if (item.parentNode.tagName === 'LI') {
    const span = document.createElement('span');

    item.parentNode.prepend(span);
    span.append(span.nextSibling);
  };
});

tree.addEventListener('click', () => {
  if (event.target.tagName !== 'SPAN') {
    return;
  };

  [...event.target.parentNode.children].map((item) => {
    if (item.tagName === 'SPAN') {
      return;
    };

    if (item.children && item.style.display !== 'none') {
      item.style.display = 'none';
    } else if (item.children) {
      item.style.display = 'block';
    };
  });
});
